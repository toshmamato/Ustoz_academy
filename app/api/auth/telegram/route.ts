import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import {
  verifyTelegramInitData,
  createSession,
  sessionCookie,
} from "@/lib/telegram-auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const initData = body?.initData;

    if (typeof initData !== "string" || !initData) {
      return NextResponse.json(
        { success: false, message: "Telegram ma'lumotlari topilmadi" },
        { status: 400 }
      );
    }

    const telegramUser = verifyTelegramInitData(initData);

    if (!telegramUser) {
      return NextResponse.json(
        { success: false, message: "Telegram tasdiqlash muddati tugagan yoki noto'g'ri" },
        { status: 401 }
      );
    }

    await connectDB();

    const user = await User.findOne({
      telegramId: String(telegramUser.id),
    }).lean();

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Avval Telegram botda /start tugmasini bosing",
        },
        { status: 403 }
      );
    }

    const token = createSession(String(telegramUser.id));

    const response = NextResponse.json({
      success: true,
      user: {
        telegramId: user.telegramId,
        firstName: user.firstName,
        username: user.username,
        role: user.role,
        premiumUntil: user.premiumUntil,
        xp: user.xp,
        level: user.level,
        streak: user.streak,
        longestStreak: user.longestStreak,
        earnedBadges: user.earnedBadges,
        referralCount: user.referralCount,
      },
    });

    response.cookies.set(sessionCookie.name, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: sessionCookie.maxAge,
    });

    return response;
  } catch (error) {
    console.error("Telegram auth error:", error);

    return NextResponse.json(
      { success: false, message: "Autentifikatsiyada xatolik yuz berdi" },
      { status: 500 }
    );
  }
}

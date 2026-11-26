import { NextRequest, NextResponse } from "next/server";
import { connection } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { verifySession, sessionCookie } from "@/lib/telegram-auth";

export async function GET(request: NextRequest) {
  await connection();

  try {
    const token = request.cookies.get(sessionCookie.name)?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Avval Telegram orqali kiring" },
        { status: 401 }
      );
    }

    const telegramId = verifySession(token);

    if (!telegramId) {
      return NextResponse.json(
        { success: false, message: "Sessiya yaroqsiz yoki muddati tugagan" },
        { status: 401 }
      );
    }

    await connectDB();

    const user = await User.findOne({ telegramId })
      .select("-_id telegramId firstName username role premiumUntil xp level streak longestStreak earnedBadges referralCount")
      .lean();

    if (!user) {
      const response = NextResponse.json(
        { success: false, message: "Foydalanuvchi topilmadi" },
        { status: 404 }
      );
      response.cookies.delete(sessionCookie.name);
      return response;
    }

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error("Session check error:", error);

    return NextResponse.json(
      { success: false, message: "Profilni yuklashda xatolik yuz berdi" },
      { status: 500 }
    );
  }
}

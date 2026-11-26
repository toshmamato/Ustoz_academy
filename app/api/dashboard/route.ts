import { NextRequest, NextResponse, connection } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import Course from "@/models/Course";
import Progress from "@/models/Progress";
import {
  verifySession,
  sessionCookie,
} from "@/lib/telegram-auth";

export async function GET(request: NextRequest) {
  await connection();

  try {
    const token = request.cookies.get(sessionCookie.name)?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Telegram orqali kiring" },
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

    const [user, progressRecords, courses] = await Promise.all([
      User.findOne({ telegramId }).lean(),
      Progress.find({ telegramId }).lean(),
      Course.find({ isPublished: true })
        .select("title slug description isPremium modules")
        .lean(),
    ]);

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Foydalanuvchi topilmadi" },
        { status: 404 }
      );
    }

    const completedLessons = progressRecords.reduce(
      (total: number, progress: any) =>
        total + (progress.completedLessonIds?.length || 0),
      0
    );

    const progressMap = new Map(
      progressRecords.map((item: any) => [
        String(item.courseId),
        item.completedLessonIds || [],
      ])
    );

    const courseResults = courses.map((course: any) => {
      const lessons = (course.modules || []).flatMap(
        (module: any) => module.lessons || []
      );

      const completedIds = progressMap.get(String(course._id)) || [];

      const completedIdsSet = new Set(
        completedIds.map((id: any) => String(id))
      );

      const completedCount = lessons.filter((lesson: any) =>
        completedIdsSet.has(String(lesson._id))
      ).length;

      const totalLessons = lessons.length;

      return {
        id: String(course._id),
        title: course.title,
        slug: course.slug,
        description: course.description,
        isPremium: course.isPremium,
        completedLessons: completedCount,
        totalLessons,
        progress: totalLessons
          ? Math.round((completedCount / totalLessons) * 100)
          : 0,
      };
    });

    const progressCourseIds = [
      ...new Set(progressRecords.map((item: any) => String(item.courseId))),
    ];

    const progressCourses = progressCourseIds.length
      ? await Course.find({
          _id: { $in: progressCourseIds },
        })
          .select("modules")
          .lean()
      : [];

    const courseLessonsMap = new Map(
      progressCourses.map((course: any) => [
        String(course._id),
        (course.modules || []).reduce(
          (total: number, module: any) =>
            total + (module.lessons?.length || 0),
          0
        ),
      ])
    );

    const completedCourses = progressRecords.filter((progress: any) => {
      const totalLessons =
        courseLessonsMap.get(String(progress.courseId)) || 0;

      return (
        totalLessons > 0 &&
        (progress.completedLessonIds?.length || 0) >= totalLessons
      );
    }).length;

    const xp = user.xp || 0;
    const level = Math.min(100, Math.floor(xp / 100) + 1);
    const currentLevelXP = (level - 1) * 100;
    const nextLevelXP = level === 100 ? null : level * 100;

    const response = NextResponse.json({
      success: true,
      user: {
        telegramId: user.telegramId,
        firstName: user.firstName || "Foydalanuvchi",
        username: user.username || "",
        role: user.role,
        premiumUntil: user.premiumUntil || null,
        xp,
        level,
        streak: user.streak || 0,
        longestStreak: user.longestStreak || 0,
        badgesCount: user.earnedBadges?.length || 0,
        earnedBadges: user.earnedBadges || [],
        completedLessons,
        completedCourses,
        levelProgress: {
          currentLevelXP,
          nextLevelXP,
          progressXP: xp - currentLevelXP,
          requiredXP: level === 100 ? 0 : 100,
          progress: level === 100
            ? 100
            : Math.min(100, ((xp - currentLevelXP) / 100) * 100),
        },
      },
      courses: courseResults,
      summary: {
        totalCourses: courseResults.length,
        totalLessons: courseResults.reduce(
          (total: number, course: any) => total + course.totalLessons,
          0
        ),
      },
    });

    response.headers.set("Cache-Control", "no-store");
    return response;
  } catch (error) {
    console.error("Dashboard API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Dashboard ma'lumotlarini yuklashda xatolik yuz berdi",
      },
      { status: 500 }
    );
  }
}

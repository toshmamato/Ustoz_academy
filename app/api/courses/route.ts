import { NextResponse, connection } from "next/server";
import connectDB from "@/lib/mongodb";
import Course from "@/models/Course";

export async function GET() {
  await connection();

  try {
    await connectDB();

    const courses = await Course.find({ isPublished: true })
      .select("title slug description isPremium modules.title modules.lessons.title")
      .lean();

    const result = courses.map((course: any) => ({
      id: course._id.toString(),
      title: course.title,
      slug: course.slug,
      description: course.description,
      isPremium: course.isPremium,
      modules: (course.modules || []).map((module: any) => ({
        title: module.title,
        lessons: (module.lessons || []).map((lesson: any) => ({
          title: lesson.title,
        })),
      })),
    }));

    return NextResponse.json({
      success: true,
      courses: result,
    });
  } catch (error) {
    console.error("Courses API error:", error);

    return NextResponse.json(
      { success: false, message: "Kurslarni yuklashda xatolik yuz berdi" },
      { status: 500 }
    );
  }
}

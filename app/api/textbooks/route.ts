import { NextResponse, connection } from "next/server";
import connectDB from "@/lib/mongodb";
import Textbook from "@/models/Textbook";

export async function GET() {
  await connection();

  try {
    await connectDB();

    const textbooks = await Textbook.find({ isActive: true })
      .select("title slug description lessons.title lessons.order lessons.isPublished")
      .lean();

    const result = textbooks.map((textbook: any) => ({
      id: textbook._id.toString(),
      title: textbook.title,
      slug: textbook.slug,
      description: textbook.description,
      lessons: (textbook.lessons || [])
        .filter((lesson: any) => lesson.isPublished)
        .sort((a: any, b: any) => a.order - b.order)
        .map((lesson: any) => ({
          title: lesson.title,
          order: lesson.order,
        })),
    }));

    return NextResponse.json({
      success: true,
      textbooks: result,
    });
  } catch (error) {
    console.error("Textbooks API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Darsliklarni yuklashda xatolik yuz berdi",
      },
      { status: 500 }
    );
  }
}

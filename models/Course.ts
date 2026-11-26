import mongoose, { Schema, Model } from "mongoose";

const lessonSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, default: "" },
  videoUrl: { type: String, default: "" },
});

const moduleSchema = new Schema({
  title: { type: String, required: true },
  lessons: [lessonSchema],
});

const courseSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, default: "" },
    isPremium: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: true },
    modules: [moduleSchema],
  },
  { timestamps: true }
);

const Course: Model<any> =
  mongoose.models.Course ||
  mongoose.model("Course", courseSchema);

export default Course;

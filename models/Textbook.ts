import mongoose, { Schema, Model } from "mongoose";

const textbookLessonSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    fileId: { type: String, required: true },
    order: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const textbookSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    description: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
    lessons: [textbookLessonSchema],
  },
  { timestamps: true }
);

const Textbook: Model<any> =
  mongoose.models.Textbook ||
  mongoose.model("Textbook", textbookSchema);

export default Textbook;

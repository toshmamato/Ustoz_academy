import mongoose, { Schema, Model } from "mongoose";

const progressSchema = new Schema(
  {
    telegramId: {
      type: String,
      required: true,
    },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    completedLessonIds: {
      type: [Schema.Types.ObjectId],
      default: [],
    },
  },
  { timestamps: true }
);

progressSchema.index(
  { telegramId: 1, courseId: 1 },
  { unique: true }
);

const Progress: Model<any> =
  mongoose.models.Progress ||
  mongoose.model("Progress", progressSchema);

export default Progress;

import mongoose, { Schema, Model } from "mongoose";

const userSchema = new Schema(
  {
    telegramId: { type: String, required: true, unique: true },
    firstName: { type: String, default: "" },
    username: { type: String, default: "" },
    role: {
      type: String,
      enum: ["user", "premium", "mentor", "admin", "owner"],
      default: "user",
    },
    premiumUntil: { type: Date, default: null },
    xp: { type: Number, default: 0, min: 0 },
    level: { type: Number, default: 1, min: 1, max: 100 },
    streak: { type: Number, default: 0, min: 0 },
    longestStreak: { type: Number, default: 0, min: 0 },
    lastActiveDate: { type: String, default: "" },
    earnedBadges: { type: [String], default: [] },
    referredBy: { type: String, default: null },
    pendingReferralBy: { type: String, default: null },
    referralCount: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
);

const User: Model<any> =
  mongoose.models.User || mongoose.model("User", userSchema);

export default User;

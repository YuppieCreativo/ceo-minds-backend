import type { User } from "../interfaces/user.model";
import { Schema, models, model } from "mongoose";

const userSchema = new Schema<User>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    role: { type: String, required: true },
    socialMedia: { type: String, required: true },
    comments: { type: String },
  },
  { timestamps: true }
);

const userModel = models.User || model<User>("User", userSchema);

export default userModel;

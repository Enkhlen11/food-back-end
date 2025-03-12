import mongoose, { Schema } from "mongoose";

type UserSchemaType = {
  email: string;
  password: string;
  phoneNumber: string;
  orderedFoods: Schema.Types.ObjectId[];
  role: string;
  isVerified: boolean;
};
const UserSchema: Schema = new Schema(
  { userName: { type: String, required: true } },
  { timestamps: true }
);
export default mongoose.model<UserSchemaType>("User", UserSchema);

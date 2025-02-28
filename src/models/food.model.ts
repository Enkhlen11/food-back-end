import mongoose, { Schema } from "mongoose";

type FoodShchemaType = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: Schema.Types.ObjectId;
};

const FoodSchema: Schema = new Schema(
  {
    foodName: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.model<FoodShchemaType>("Food", FoodSchema);

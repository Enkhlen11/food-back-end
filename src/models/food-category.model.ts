import mongoose, { Schema } from "mongoose";

type FoodCategorySchemaType = {
  categoryName: string;
};

const FoodCategorySchema: Schema = new Schema(
  {
    categoryName: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<FoodCategorySchemaType>(
  "FoodCategory",
  FoodCategorySchema
);
// {_id:1778213,
//   food:1232312,
//   quantity:2
// }

// {
//   _id:1234,
//   user:34234,
//   price:20k,
//   status:Pending,
//   foodOrderItems:["1778213",'123123']

// }

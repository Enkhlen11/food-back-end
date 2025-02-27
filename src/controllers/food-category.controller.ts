import { Request, Response } from "express";
import foodCategoryModel from "../models/food-category.model";

export const createFoodCategory = async (req: Request, res: Response) => {
  try {
    const categoryData = req.body;
    const newCategory = await foodCategoryModel.create(categoryData);
    res
      .status(200)
      .json({ message: "Successfullycreated category", newCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodCategory" });
  }
};

export const getFoodCategories = async (req: Request, res: Response) => {
  try {
    const allCategory = await foodCategoryModel.find();
    res
      .status(200)
      .json({ message: "Successfullycreated category", data: allCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in createFoodCategory", error });
  }
};

import { Request, Response } from "express";
import foodModel from "../models/food.model";

export const createFood = async (req: Request, res: Response) => {
  try {
    const foodData = req.body;
    const newFood = await foodModel.create(foodData);
    res.status(200).json({ message: "Sussessfully created category", newFood });
  } catch (error) {
    res.status(500).json({ message: "Error in createFood", error });
  }
};

export const getFood = async (req: Request, res: Response) => {
  try {
    const allFood = await foodModel.find();
    res
      .status(500)
      .json({ message: "Successfully get category", data: allFood });
  } catch (error) {
    res.status(500).json({ message: "Error in get food", error });
  }
};

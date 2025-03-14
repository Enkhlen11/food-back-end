import { Request, response, Response } from "express";
import foodModel from "../models/food.model";
import { RequestListener } from "http";

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
  const { foodId } = req.params;

  // console.log("FOOD ID", foodId);
  try {
    const allFood = await foodModel.find({ _id: foodId });
    // console.log(allFood);
    res
      .status(200)
      .json({ message: "Successfully get category", data: allFood });
  } catch (error) {
    res.status(500).json({ message: "Error in get food", error });
  }
};

export const getAllFood = async (req: Request, res: Response) => {
  try {
    const allFood = await foodModel.find().populate("category");
    console.log(allFood);
    res
      .status(200)
      .json({ message: "Successfully get allFood", data: allFood });
  } catch (error) {
    res.status(500).json({ message: "Error in get food", error });
  }
};

export const putFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  try {
    const allFood = await foodModel.updateOne({ _id: foodId }, req.body);
    res
      .status(200)
      .json({ message: "Successfully put food id", data: allFood });
  } catch (error) {
    res.status(500).json({ message: "Error in put food id", error });
  }
  res.json();
};

export const deleteFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  try {
    const allFood = await foodModel.deleteOne({ _id: foodId });
    res
      .status(200)
      .json({ message: "Successfully delete food id", data: allFood });
  } catch (error) {
    res.status(500).json({ message: "Error in delete food id" });
  }
  res.json();
};

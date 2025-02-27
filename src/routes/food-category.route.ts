import express, { Router } from "express";
import {
  createFoodCategory,
  getFoodCategories,
} from "../controllers/food-category.controller";

const categoryRoute = Router();
categoryRoute.post("/", createFoodCategory);
categoryRoute.get("/", getFoodCategories);
export { categoryRoute };

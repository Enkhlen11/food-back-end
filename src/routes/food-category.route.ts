import { Router } from "express";
import { Request, Response } from "express";
import {
  createFoodCategory,
  deleteCategoryById,
  deleteFoodCategories,
  getCategoryById,
  getFoodCategories,
  putCategoryById,
  putFoodCategories,
} from "../controllers/food-category.controller";
import foodCategoryModel from "../models/food-category.model";

const categoryRoute = Router();
categoryRoute.post("/", createFoodCategory);
categoryRoute.get("/", getFoodCategories);
categoryRoute.get("/:foodCategoryId", getCategoryById);
categoryRoute.put("/:foodCategoryId", putCategoryById);
categoryRoute.delete("/:foodCategoryId", deleteCategoryById);
categoryRoute.put("/", putFoodCategories);
categoryRoute.delete("/", deleteFoodCategories);
export { categoryRoute };

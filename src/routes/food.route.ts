import { Router } from "express";
import {
  createFood,
  deleteFood,
  getAllFood,
  getFood,
  putFood,
} from "../controllers/food-controller";

const foodRoute = Router();
foodRoute.post("/", createFood);
foodRoute.get("/:foodId", getFood);
foodRoute.get("/", getAllFood);
foodRoute.put("/:foodId", putFood);
foodRoute.delete("/:foodId", deleteFood);
export { foodRoute };

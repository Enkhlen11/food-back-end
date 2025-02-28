import { Router } from "express";
import { createFood, getFood } from "../controllers/food-controller";

const foodRoute = Router();
foodRoute.post("/", createFood);
foodRoute.get("/", getFood);

export { foodRoute };

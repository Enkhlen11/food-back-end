import { Router } from "express";
import { singUp } from "../controllers/auth/signUp.controller";
// import { signUp } from "../controllers/auth/signUp.controller";

const userRoute = Router();

userRoute.post("/signup", singUp);
// userRoute.post("/signin", singIn);

export { userRoute };

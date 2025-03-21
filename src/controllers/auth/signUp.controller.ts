import { Request, Response } from "express";
import userModel from "../../models/user.model";

export const signUp = (req: Request, res: Response) => {
  const { email, password } = req.body;
  userModel.create({ email, password });
  if (!email) {
    res.status(401).json({ message: "Emailaa bichne uu" });
  }
};

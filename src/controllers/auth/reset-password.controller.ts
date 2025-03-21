import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import userModel from "../../models/user.model";
import { hashSync } from "bcryptjs";


export const resetPassword = async (req: Request, res: Response) => {
  const jwtSecret = process.env.JWT_SECRET;
  try {
    const { password, token } = req.body;
    if (!token) {
      res.status(400).json({ message: "Token baihgui baina" });
      return;
    }

    const decoded = jwt.verify(token, jwtSecret!) as JwtPayload;
    const id = decoded.id;

    const user = await userModel.findByIdAndUpdate(id, {
      password: hashedPassword,
    });
    res
      .status(200)
      .json({ message: "Tanii password amjilttai soligdloo", data: user });
  } catch (error) {
    res.status(500).json({ message: "Aldaa garlaa", error });
  }
};

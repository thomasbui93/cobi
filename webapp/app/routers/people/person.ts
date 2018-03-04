import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ people: "sample people" });
  } catch (err) {
    next(err);
  }
};

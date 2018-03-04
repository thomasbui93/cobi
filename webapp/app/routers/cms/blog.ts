import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ blog: "sample blog" });
  } catch (err) {
    next(err);
  }
};

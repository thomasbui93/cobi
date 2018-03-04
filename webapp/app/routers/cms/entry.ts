import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ blog: "sample blog list" });
  } catch (err) {
    next(err);
  }
};

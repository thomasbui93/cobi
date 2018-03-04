import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ people: "query response" });
  } catch (err) {
    next(err);
  }
};
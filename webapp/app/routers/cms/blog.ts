import { Request, Response, NextFunction } from "express"

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ blog: "sample blog changed" })
  } catch (err) {
    next(err)
  }
}

import { Request, Response, NextFunction } from "express";
import { createUrlService } from "../services/url.service.js";

export const creatUrlController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { longUrl } = req.body;

    const data = await createUrlService(longUrl);

    res.status(201).json({ status: "true", message: "Url created successfully.", data });
  } catch (error) {
    next(error);
  }
};

export const redirectUrlController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {

};

import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError.js";

export const errorMiddleware = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    console.error(error);

    if(error instanceof AppError){
        res.status(error.statusCode).json({
            status: false,
            message: error.message,
        });
        return;
    }

    res.status(500).json({
        status: false,
        message: "Internal server error."
    });
};
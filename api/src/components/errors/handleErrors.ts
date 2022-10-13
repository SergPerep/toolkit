import { Request, Response, NextFunction } from "express";
import { AppError } from "./appErrors";
import log from "../../utils/log";
const handleErrors = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  log.error("~~ " + err); // for developer
  res.status(err.statusCode).json({ status: err.status, error: err.message }); // for user
};

export default handleErrors;

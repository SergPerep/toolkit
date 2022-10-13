import { Request, Response, NextFunction } from "express";
import log from "./log";
// Middleware that logs request into terminal
const logRequests = (req: Request, res: Response, next: NextFunction) => {
  log.green(`-- ${req.method} ${req.path}`);
  next();
};

export default logRequests;

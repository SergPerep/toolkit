import sc from "../../utils/statusCodes";
// Use these to specify behavior of custom error handler middleware
export class AppError extends Error {
  statusCode: number;
  status: string;
  constructor(
    message = "Internal server error",
    statusCode = 500,
    status = "error",
    name = ""
  ) {
    super(message);
    this.name = name || this.constructor.name;
    this.statusCode = statusCode;
    this.status = status;
  }
}

export class EmptyFieldError extends AppError {
  constructor(propName: string) {
    const message = `Empty field: ${propName}`;
    super(message, 400, "fail");
  }
}

export class WrongTypeError extends AppError {
  constructor(propName: string, prop: unknown, expType: string) {
    const message = `Expected ${propName} to be a ${expType} instead of a ${typeof prop}`;
    super(message, 400, "fail");
  }
}

export class RecordNotFoundError extends AppError {
  constructor(recordId: string) {
    super(`Record with id='${recordId}' was not found`, sc.NOT_FOUND, "fail");
  }
}

export class CannotBeNegativeError extends AppError {
  constructor(propName: string, propValue: number) {
    super(
      `'${propName}' cannot be negative. Got ${propValue}`,
      sc.BAD_REQUEST,
      "fail"
    );
  }
}

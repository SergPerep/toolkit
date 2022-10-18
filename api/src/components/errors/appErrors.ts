import sc from "../../utils/statusCodes";
// Use these to specify behavior of custom error handler middleware

const getPropNameAndValue = <T = unknown>(obj: {
  [key: string]: T;
}): [string, T] => {
  const name = Object.keys(obj)[0];
  const value = obj[name];
  return [name, value];
};

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
  constructor(obj: { [key: string]: unknown }) {
    const [propName] = getPropNameAndValue(obj);
    super(`Empty field: ${propName}`, sc.BAD_REQUEST, "fail");
  }
}

export class WrongTypeError extends AppError {
  constructor(obj: { [key: string]: unknown }, expType: string) {
    const [propName, propValue] = getPropNameAndValue(obj);
    const message = `Expected ${propName} to be a ${expType} instead of a ${typeof propValue}`;
    super(message, sc.BAD_REQUEST, "fail");
  }
}

export class RecordNotFoundError extends AppError {
  constructor(recordId: string) {
    super(`Record with id='${recordId}' was not found`, sc.NOT_FOUND, "fail");
  }
}

export class CannotBeNegativeError extends AppError {
  constructor(obj: { [key: string]: number }) {
    const [propName, propValue] = getPropNameAndValue(obj);
    super(
      `'${propName}' cannot be negative. Got ${propValue}`,
      sc.BAD_REQUEST,
      "fail"
    );
  }
}

export class ApiError extends Error {
  constructor(args = "Not found", status = 404) {
    super(args);
    this.status = status;
  }
}

export const getError = (req, res, next) => {
  let error = new ApiError("Not found!", 404);
  next(error);
};

export const handleError = (err, req, res, next) => {
  const errorStatus = err.status;
  return res.status(errorStatus).json({
    error: {
      name: err.name,
      message: err.message,
      status: errorStatus,
    },
  });
};

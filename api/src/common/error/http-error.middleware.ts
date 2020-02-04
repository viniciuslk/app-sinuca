import { NextFunction, Request, Response } from 'express'

import { HttpError } from './http-error'

export const httpErrorMiddleware = (
  error: HttpError,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const code = error.code || 500
  const message = error.message || 'Something went wrong'
  const status = error.status

  response.status(code).json({
    status,
    code,
    message
  })
}

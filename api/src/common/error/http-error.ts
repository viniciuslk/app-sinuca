export class HttpError extends Error {
  status: string = "error"
  message: string
  code: number

  constructor(code?: number, message?: string) {
    super(message)
    this.message = message
    this.code = code
  }
}

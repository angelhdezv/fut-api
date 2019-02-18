import { Response, Next } from "express";

enum Code
{
  BAD_REQUEST = 402,
  UNAUTHORIZED = 403
}

class Responses
{

  /**
   * Call next() method to continue to following handlers, 
   * In other words it is an equivalent to success response.
   */

  static next(next: Next)
  {
    next();
  }

  /**
   * Send an error message based on response code.
   */

  static sendError(res: Response, code: Code)
  {
    res.status(Code[code]);
    res.send(code.toLocaleString());
  }

  /**
   * Send a custom error message based on response code.
   */

  static sendErrorMessage(res: Response, code: Code, message: string)
  {
    res.status(Code[code]);
    res.send(code.toLocaleString() + ": " + message);
  }
}

export default Responses;
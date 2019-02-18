import { Request, Response, Next } from "express";
import Res from "@http/middlewares/util";

class Authentication
{
  constructor() { }

  async authenticate(req: Request, res: Response, next: Next)
  {
    Res.next(next);
  }
}

export default Authentication;
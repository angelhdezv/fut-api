import { Request, Response } from "express";
import Mocks from "@models/helpers/Mocks"
import Res from "@http/controllers/util";

class match
{
  constructor() { }

  async getList(req: Request, res: Response)
  {
    const result = Mocks.Matches();
    return Res.sendList(res, result);
  }
}

export default match;
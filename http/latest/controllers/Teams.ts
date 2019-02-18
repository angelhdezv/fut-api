import { Request, Response } from "express";
import Mocks from "@models/helpers/Mocks"
import Res from "@http/controllers/util";

class Teams
{
  constructor() { }

  async getList(req: Request, res: Response)
  {
    const result = Mocks.Teams();
    return Res.sendList(res, result);
  }
}

export default Teams;
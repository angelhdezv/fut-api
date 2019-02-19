import { Request, Response } from "express";
import Sql from "@repositories/sql";
import Res from "@http/controllers/util";

class Teams
{
  private sql: Sql;

  constructor(sql: Sql)
  {
    this.sql = sql;
  }



  async getList(req: Request, res: Response)
  {
    const result = await this.sql.getTeamsList();
    return Res.sendList(res, result);
  }
}

export default Teams;
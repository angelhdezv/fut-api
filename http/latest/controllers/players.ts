import { Request, Response } from "express";
import Sql from "@repositories/sql";
import Res from "@http/controllers/util";
import Mocks from "@models/helpers/Mocks";
import { Generator } from "@models/helpers/Util";
import Player from "@models/Player";
import Teams from "@models/Teams";

class Players
{
  private sql: Sql;

  constructor(sql: Sql)
  {
    this.sql = sql;
  }

  async getDetails(req: Request, res: Response)
  {
    const id = req.params.id;
    const result = await this.sql.getPlayersDetails(id);
    return Res.sendModel(res, result);
  }

  async getList(req: Request, res: Response)
  {
    const result = await this.sql.getPlayersList();
    return Res.sendList(res, result);
  }

  async save(req: Request, res: Response)
  {
    let player = new Player(req.params.id)
            .build(
                req.params.name,
                req.params.team
            );
            player = await this.sql.savePlayer(player);
    return Res.sendModel(res, player);
  }

  async update(req: Request, res: Response)
  {
    const id = req.params.id;
    const name=req.params.name;
    let teams = new Teams(Generator.getId())
            .build(
              req.params.team
            );
    await this.sql.saveTeam(teams);
    const result = await this.sql.setPlayer(id, name, teams);

    return Res.sendModel(res, result);
  }

  async delete(req: Request, res: Response)
  {
    const id=req.params.id;
    await this.sql.deletePlayer(id);
    return Res.sendOk(res);
  }
}

export default Players;
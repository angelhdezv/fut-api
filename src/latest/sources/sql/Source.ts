import Repository from "@repositories/sql";
import { Pair, Generator } from "@models/helpers/Util";
import Player from "@models/Player";
import Teams from "@models/Teams";
import Executor from "./Executor";
import * as Mapper from "./Mappers";


class Source extends Executor implements Repository
{
  fetchMatches(players: Player[]): Promise<Player[]>
  {
    throw new Error("Method not implemented.");
  }
 
  async getPlayersList(): Promise<Player[]>
  {
    const query =
      `SELECT * FROM Player`;
    const filter = [];
    const res = await this.get(query, filter, new Mapper.PlayerMapper());
    return res;
  }

  async getTeamsList(teamId?: number): Promise<Teams[]>
  {
    const query =
      `SELECT * FROM team`;
    const filter = [];
    if (teamId) filter.push(new Pair("id_team", teamId));
    const res = await this.get(query, filter, new Mapper.TeamsMapper());
    return res;
  }

  async getPlayersDetails(playerId: number): Promise<Player>
  {
    const query =
      `SELECT * FROM Player WHERE id_player = ?`;
    const params = [playerId];
    const res = await this.getDetails(query, params, new Mapper.PlayerMapper());
    return res[0];
  }

  async getTeamsDetails(teamId: number): Promise<Teams>
  {
    const query =
      `SELECT * FROM team WHERE id_team = ?`;
    const params = [teamId];
    const res = await this.getDetails(query, params, new Mapper.TeamsMapper());
    return res[0];
  }

  async fetchPlayer(players: Player[]): Promise<Player[]>
  {
    const cQuery = "SELECT id_player FROM player WHERE id_team = ?";
    let cplayers = [];
    for (let Player of players) {
      let player = await this.getPlayersDetails(Player.id);
      cplayers.push(await this.getPlayersDetails(player.id))
      Object.assign(players,
        {
          player: Player
        });
    }
    return players;
  }

  async savePlayer(player: Player): Promise<Player>
  {
    const eQuery = "SELECT id_player FROM player WHERE id_player = ?"
    const exist = await this.getAny(eQuery, [player.id]);
    if (exist[0]) return this.getPlayersDetails(player.id);

    const query =
      "INSERT INTO player (id_player, nombre,id_team)";
    const Team: Teams = await this.saveTeam(new Teams(Generator.getId()).build(player.team.toString()));
    const params = [player.id, player.name,Team.id];
    await this.save(query, params);
    return this.getPlayersDetails(player.id);
  }

  async setPlayer(playerId: number, name?: string, Team?: Teams): Promise<Player>
  {
    const query = "UPDATE player";
    const columns = [];
    if (name) columns.push(new Pair("nombre", name));
    if (Team) columns.push(new Pair("id_team", Team.id));
    await this.set(query, columns, "id_player", playerId);
    return this.getPlayersDetails(playerId);
  }
 
   async deletePlayer(playerId: number): Promise<void>
  {
    const query =
      "DELETE FROM player " +
      "WHERE id_player = ?";
    const params = [playerId];
    return this.delete(query, params);
  }

  async saveTeam(team: Teams): Promise<Teams>
  {
    const eQuery = "SELECT id_team FROM team WHERE nombre = ?"
    const exist = await this.getAny(eQuery, [team.name]);
    if (exist[0]) return this.getTeamsDetails(team.id);

    const query =
      "INSERT INTO team (id_team, nombre)";
    const params = [team.id, team.name];
    await this.save(query, params);
    return this.getTeamsDetails(team.id);
  }
  async setTeam(teamId: number, name?: string, players?: Player[]): Promise<Teams>
  {
    const query = "UPDATE Team";
    const columns = [];
    if (name) columns.push(new Pair("nombre", name));
    await this.set(query, columns, "id_team", teamId);

    if (players) {
      const dQuery = "DELETE FROM player WHERE id_team = ?";
      await this.delete(dQuery, [teamId]);
      const cQuery =
        "INSERT INTO player (id_player,nombre, id_team)";
      for (let c of players) {
        let player = await this.savePlayer(c);
        let cValues = [Generator.getId(), player.name, teamId];
        await this.save(cQuery, cValues);
      }
    }
    return this.getTeamsDetails(teamId);
  }
  async deleteTeam(teamId: number): Promise<void>
  {
    const query =
      "UPDATE player SET id_team=null WHERE id_team = ?;" +
      "DELETE FROM project WHERE project_id = ?;";
    const params = [teamId, teamId];
    return this.delete(query, params);
  }  

  private static instance: Source;
  private constructor() { super(); }
  static getInstance(): Source { return this.instance || (this.instance = new this()); }
}

export default Source;
import Repository from "@repositories/sql";
import { Pair, Generator } from "@models/helpers/Util";
import Player from "@models/Player";
import Team from "@models/Team";
import Executor from "./Executor";
import * as Mapper from "./Mappers";


class Source extends Executor implements Repository
{
  
  async getPlayerList(): Promise<Player[]>
  {
    const query =
      `SELECT p.* FROM Player p`;
    const filter = [];
    const res = await this.get(query, filter, new Mapper.PlayerMapper());
    return res;
  }

  async getTeamList(teamId?: number): Promise<Team[]>
  {
    const query =
      `SELECT t.* FROM team t`;
    const filter = [];
    if (teamId) filter.push(new Pair("id_team", teamId));
    const res = await this.get(query, filter, new Mapper.TeamMapper());
     return this.fetchTeam(res);
  }

  async getPlayerDetails(playerId: number): Promise<Player>
  {
    const query =
      `SELECT p.* FROM Player p WHERE p.id_player = ?`;
    const params = [playerId];
    const res = await this.getDetails(query, params, new Mapper.PlayerMapper());
    return res[0];
  }

  async getTeamDetails(teamId: number): Promise<Team>
  {
    const query =
      `SELECT t.* FROM team t WHERE t.id_team = ?`;
    const params = [teamId];
    const res = await this.getDetails(query, params, new Mapper.TeamMapper());
    const fetch = await this.fetchTeam(res);
    return fetch[0];
  }

  async fetchTeam(teams: Team[]): Promise<Team[]>
  {
    const cQuery = "SELECT p.id_player FROM player p WHERE p.id_team = ?";
    for (let team of teams) {
      let players = [];
      let cPlayers = await this.getAny(cQuery, [team.id]);
      for (let player of cPlayers){
        players.push(await this.getPlayerDetails(player))
      }
      Object.assign(team,
        {
          players: players
        });
    }
    return teams;
  }

  async savePlayer(player: Player): Promise<Player>
  {
    const eQuery = "SELECT p.id_player FROM player p WHERE p.id_player = ?"
    const exist = await this.getAny(eQuery, [player.id]);
    if (exist[0]) return this.getPlayerDetails(player.id);

    const query =
      "INSERT INTO player (id_player, nombre,id_team)";
    const team: Team = await this.saveTeam(new Team(Generator.getId()).build(player.team.toString()));
    const params = [player.id, player.name,team.id];
    await this.save(query, params);
    return this.getPlayerDetails(player.id);
  }

  async setPlayer(playerId: number, Team?: number): Promise<Player>
  {
    const query = "UPDATE player";
    const columns = [];
    if (Team) columns.push(new Pair("id_team", Team));
    await this.set(query, columns, "id_player", playerId);
    return this.getPlayerDetails(playerId);
  }
 
   async deletePlayer(playerId: number): Promise<void>
  {
    const query =
      "DELETE FROM player " +
      "WHERE id_player = ?";
    const params = [playerId];
    return this.delete(query, params);
  }

  async saveTeam(team: Team): Promise<Team>
  {
    const eQuery = "SELECT t.id_team FROM team t WHERE t.nombre = ?"
    const exist = await this.getAny(eQuery, [team.name]);
    if (exist[0]) return this.getTeamDetails(team.id);

    const query =
      "INSERT INTO team (id_team, nombre)";
    const params = [team.id, team.name];
    await this.save(query, params);
    return this.getTeamDetails(team.id);
  }
  async setTeam(teamId: number, name?: string, players?: Player[]): Promise<Team>
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
    return this.getTeamDetails(teamId);
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
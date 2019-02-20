import Player from "@models/Player";
import Teams from "@models/Teams";

interface Sql
{
  getPlayersList(): Promise<Player[]>;
  getTeamsList(playerId?: number): Promise<Teams[]>;
  getPlayersDetails(playerId: number): Promise<Player>;
  fetchTeam(teams: Teams[]): Promise<Teams[]>
  savePlayer(player: Player): Promise<Player>;
  setPlayer(playerId: number, Team?: number): Promise<Player>;
  deletePlayer(playerId: number): Promise<void>;
  saveTeam(team: Teams): Promise<Teams>;
  setTeam(teamId: number): Promise<Teams>;
  deleteTeam(teamId: number): Promise<void>;
}

export default Sql;
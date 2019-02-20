import Player from "@models/Player";
import Team from "@models/Team";

interface Sql
{
  getPlayerList(): Promise<Player[]>;
  getTeamList(playerId?: number): Promise<Team[]>;
  getPlayerDetails(playerId: number): Promise<Player>;
  fetchTeam(teams: Team[]): Promise<Team[]>
  savePlayer(player: Player): Promise<Player>;
  setPlayer(playerId: number, Team?: number): Promise<Player>;
  deletePlayer(playerId: number): Promise<void>;
  saveTeam(team: Team): Promise<Team>;
  setTeam(teamId: number): Promise<Team>;
  deleteTeam(teamId: number): Promise<void>;
}

export default Sql;
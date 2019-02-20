import Player from "@models/Player";
import Team from "@models/Team";
import Match from "@models/Match"


abstract class Mapper<T>
{
  transformList(dataSet: any): T[]
  {
    if (!dataSet) return [];
    const result = [];
    for (let data of dataSet)
      result.push(this.transform(data));
    return result;
  }
  abstract transform(data): T;
}

class PlayerMapper extends Mapper<Player>
{
  transform(data: any): Player
  {
    return new Player(data.id_player)
      .build(
        data.nombre,
        new Team(data.id_team));
  }
}

class TeamMapper extends Mapper<Team>
{
  transform(data: any): Team
  {
    return new Team(data.id_team)
      .build(
        data.nombre,
        []);
  }
}
class MatchMapper extends Mapper<Match>
{
  transform(data: any): Match
  {
    return new Match(data.id)
      .build(
        new Team(data.id_EquipoLocal),
        new Team(data.id_Equipovisitante),
        [data.golesLocal,data.golesVisit]);
  }
}

export { PlayerMapper, TeamMapper, MatchMapper, Mapper };
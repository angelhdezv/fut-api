import Player from "@models/Player";
import Teams from "@models/Teams";
import Matches from "@models/Matches"


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
        new Teams(data.id_team));
  }
}

class TeamsMapper extends Mapper<Teams>
{
  transform(data: any): Teams  
  {
    return new Teams(data.id_team)
      .build(
        data.nombre,
        []);
  }
}
class MatchMapper extends Mapper<Matches>
{
  transform(data: any): Matches
  {
    return new Matches(data.id)
      .build(
        new Teams(data.id_EquipoLocal),
        new Teams(data.id_Equipovisitante),
        [data.golesLocal,data.golesVisit]);
  }
}

export { PlayerMapper, TeamsMapper, MatchMapper, Mapper };
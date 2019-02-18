import Model from "./Model";
import Player from "./Player";

class Teams extends Model
{

  id: number;
  name: string;
  players: Player[];

  constructor(id: number)
  {
    super();
    this.id = id;
  }

  build(name: string, Urplayers: Player[]): Teams
  {
    this.name = name;
    this.players=Urplayers;
    return this;
  }

  toJSON()
  {
    return {
      id: this.id,
      name: this.name,
      MyPlayers: this.players
    };
  }
}

export default Teams;
import Model from "./Model";
import Player from "./Player";

class Team extends Model
{

  id: number;
  name: string;
  players: Player[];

  constructor(id: number)
  {
    super();
    this.id = id;
  }

  build(name: string, players?: Player[]): Team
  {
    this.name = name;
    if(players){this.players=players;}
    return this;
  }

  toJSON()
  {
    return {
      id: this.id,
      name: this.name,
      players: this.players
    };
  }
}

export default Team;
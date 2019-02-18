import Model from "./Model";
import Teams from "./Teams";


class Player extends Model
{

  id: number;
  name: string;
  team: Teams;

  constructor(id: number)
  {
    super();
    this.id = id;
  }

  build(name: string, Uteam:Teams ): Player
  {
    this.name = name;
    this.team = Uteam;
    return this;
  }

  toJSON()
  {
    return {
      id: this.id,
      name: this.name,
      teams: this.team
    };
  }
}

export default Player;
import Model from "./Model";
import Team from "./Team";


class Player extends Model
{

  id: number;
  name: string;
  team: Team;

  constructor(id: number)
  {
    super();
    this.id = id;
  }

  build(name: string, team:Team ): Player
  {
    this.name = name;
    this.team = team;
    return this;
  }

  toJSON()
  {
    return {
      id: this.id,
      name: this.name,
      team: this.team
    };
  }
}

export default Player;
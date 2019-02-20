import Model from "./Model";
import Team from "./Team";



class Match extends Model
{

  id: number;
  Home: Team;
  Visit: Team;
  Score: number[];


  constructor(id: number)
  {
    super();
    this.id = id;
  }

  build(local: Team, Visitante:Team, Marcador: number[] ): Match
  {
    this.Home = local;
    this.Visit = Visitante;
    this.Score=Marcador;
    return this;
  }

  toJSON()
  {
    return {
      id: this.id,
      Home: this.Home,
      Visit: this.Visit,
      Score: this.Score
    };
  }
}

export default Match;
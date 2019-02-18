import Model from "./Model";
import Teams from "./Teams";



class Matches extends Model
{

  id: number;
  Home: Teams;
  Visit: Teams;
  Score: number[];


  constructor(id: number)
  {
    super();
    this.id = id;
  }

  build(local: Teams, Visitante:Teams, Marcador: number[] ): Matches
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

export default Matches;
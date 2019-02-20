import Player from "@models/Player";
import Team from "@models/Team";
import Matches from "@models/Match"
import { Generator } from "@models/helpers/Util";

class Mocks
{
  
  static Teams()
  {
    return [
      new Team(Generator.getId()).build("Betis",this.Players()),
      new Team(Generator.getId()).build("PSV",this.Players()),
      new Team(Generator.getId()).build("West Ham",this.Players())
    ];
  }
  static Players()
  {
    return [
      new Player(Generator.getId()).build("Chuky Lozano ",this.Teams()[2]),
      new Player(Generator.getId()).build("Chicharito Hernandez ",this.Teams()[3]),
      new Player(Generator.getId()).build("Diego Lainez ",this.Teams()[1])
    ];
  }
  static Matches()
  {
    return [
      new Matches(Generator.getId()).build(this.Teams()[1],this.Teams()[2],[3,2]),
      new Matches(Generator.getId()).build(this.Teams()[2],this.Teams()[3],[1,0]),
      new Matches(Generator.getId()).build(this.Teams()[3],this.Teams()[1],[0,4])
    ];
  }
 
  

}

export default Mocks;
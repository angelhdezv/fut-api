import Players from "@http/controllers/players";
import Teams from "@http/controllers/Teams";
import Sql from "@sql/Source";
import Matches from "@http/controllers/match";


class Controllers
{
  static createPlayers()
  {
    return new Players(
      Sql.getInstance());
  }

  static createTeams()
  {
    return new Teams(Sql.getInstance());
  }

  static createMatches()
  {
    return new Matches();
  }
  
}

export default Controllers;
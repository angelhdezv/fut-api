import player from "@http/controllers/player";
import team from "@http/controllers/team";
import Sql from "@sql/Source";
import match from "@http/controllers/match";


class Controllers
{
  static createPlayers()
  {
    return new player(
      Sql.getInstance());
  }

  static createTeams()
  {
    return new team(Sql.getInstance());
  }

  static createMatches()
  {
    return new match();
  }
  
}

export default Controllers;
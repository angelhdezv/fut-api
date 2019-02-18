import Authentication from "@http/middlewares/authentication";

class Middlewares
{
  static createAuthentication()
  {
    return new Authentication();
  }
}

export default Middlewares;
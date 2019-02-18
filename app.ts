require("module-alias/register");
import * as bodyParser from "body-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import * as cors from "cors";
import * as dotenv from "dotenv";
import { Router } from "express";


class App
{
  public app;
  public server;

  public static start(): App
  {
    return new App();
  }

  constructor()
  {
    this.app = express();
    this.app.use(logger("dev"));
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));
    dotenv.config();

    const rootDir = path.dirname(require.main.filename) + "/../";
    this.app.use('/', express.static(rootDir + 'assets/public'));
    this.app.use('/docs', express.static(rootDir + 'docs'));

    //API version initialization
    this.app.use("/v1", new v1_0().init());

    const port = this.normalizePort(process.env.PORT || "4004");
    this.server = this.app.listen(port);
    console.log("Listening port: " + port);
  }

  private normalizePort(val)
  {
    const port = parseInt(val, 10);
    if (isNaN(port))
      return val;
    if (port >= 0)
      return port;
    return false;
  }
}


//Latest (v1.0)

import Dev from "@http/dev";
import Routes from "@http/routes";
import Resources from "@http/resources";
import Middlewares from "@http/middlewares";

class v1_0
{
  private router: Router;

  constructor()
  {
    this.router = Router();
  }

  public init()
  {
    this.router.use("/resources", new Resources().init());
    this.router.use("/dev", new Dev().init());
    this.router.use("/", new Middlewares().init());
    this.router.use("/", new Routes().init());
    return this.router;
  }
}

export { App };
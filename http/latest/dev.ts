const fs = require("fs");
import * as path from "path";
import * as mysql from "mysql";
import SqlExc from "@sql/Executor";
import { Router } from "express";

import Res from "@controllers/util";

class Dev
{
  private router: Router;

  constructor()
  {
    this.router = Router();
  }

  init(): Router
  {
    this.router.get("/restart", async (req, res) =>
    {
      const sql = new DevSql();
      await sql.restartDb();
      return Res.sendOk(res);
    });

    return this.router;
  }
}

class DevSql extends SqlExc
{
  constructor()
  {
    super();
    this.sql = mysql.createConnection({
      host: process.env.SQL_HOST,
      user: process.env.SQL_USER,
      password: process.env.SQL_PASSWORD,
      multipleStatements: true
    });
  }

  restartDb(): Promise<void>
  {
    return new Promise(resolve =>
    {
      const dirname = path.dirname(require.main.filename) + "/../";
      const dbPath = "assets/dev/db.sql";
      fs.readFile(dirname + dbPath, "utf8", (err, content) =>
      {
        const DATABASE = process.env.SQL_DATABASE;
        const query = `DROP DATABASE IF EXISTS ${DATABASE}; ${content}`;
        this.execute(query).then(() => resolve());
      });
    });
  }
}

export default Dev;
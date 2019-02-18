import { Response } from "express";
import Model from "@models/Model";

class Responses
{

  /**
   * Send a simple 200 response.
   */

  static sendOk(res: Response)
  {
    res.send("Ok");
  }

  /**
   * Send a json response with the information defined in the 
   * toJSON() method of a Model.
   */

  static sendModel(res: Response, result: Model)
  {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result ? result.toJSON() : {}));
  }

  /**
   * Send a json response with the information defined in the 
   * toJSON() method of a Model collection.
   */

  static sendList(res: Response, result: Model[])
  {
    res.setHeader("Content-Type", "application/json");
    const out = [];
    for (let r of result)
      out.push(r.toJSON());
    res.send(JSON.stringify(out ? out : []));
  }

  /**
  * Send a json response with the information of any object.
  */

  static sendObject(res: Response, result: any)
  {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(result ? result : {}));
  }
}

export default Responses;
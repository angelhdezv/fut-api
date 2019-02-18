import { Router } from "express";
import * as multer from "multer"

import Res from "@controllers/util";
import { Generator } from "@models/helpers/Util";


export class Resources
{
  private router: Router;

  constructor()
  {
    this.router = Router();
  }

  init(): Router
  {

    /**
    * @api {post} /resource/file Save a file
    * @apiName SaveFile
    * @apiGroup Resources
    * @apiVersion 0.1.0
    * 
    * @apiParam {Object} file File data.
    * @apiSampleRequest off
    * @apiSuccess {String} url File path.
    */

    var storage = multer.diskStorage(
      {
        destination: 'assets/public/resources',
        filename: function (req, file, cb)
        {
          let extension = "";
          if (file.originalname)
            extension = "." + file.originalname.split('.').pop();
          cb(null, Generator.getId() + extension);
        }
      }
    );
    var upload = multer({ storage: storage }).single("file");

    this.router.post("/file", (req, res) =>
    {
      upload(req, res, () =>
      {
        let result = {
          url: `http://${req.get("host")}/resources/${req.file.filename}`
        }
        Res.sendObject(res, result);
      });
    });

    return this.router;
  }
}

export default Resources;
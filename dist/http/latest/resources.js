"use strict";
exports.__esModule = true;
var express_1 = require("express");
var multer = require("multer");
var util_1 = require("@controllers/util");
var Util_1 = require("@models/helpers/Util");
var Resources = /** @class */ (function () {
    function Resources() {
        this.router = express_1.Router();
    }
    Resources.prototype.init = function () {
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
        var storage = multer.diskStorage({
            destination: 'assets/public/resources',
            filename: function (req, file, cb) {
                var extension = "";
                if (file.originalname)
                    extension = "." + file.originalname.split('.').pop();
                cb(null, Util_1.Generator.getId() + extension);
            }
        });
        var upload = multer({ storage: storage }).single("file");
        this.router.post("/file", function (req, res) {
            upload(req, res, function () {
                var result = {
                    url: "http://" + req.get("host") + "/resources/" + req.file.filename
                };
                util_1["default"].sendObject(res, result);
            });
        });
        return this.router;
    };
    return Resources;
}());
exports.Resources = Resources;
exports["default"] = Resources;
//# sourceMappingURL=resources.js.map
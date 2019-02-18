"use strict";
exports.__esModule = true;
require("module-alias/register");
var bodyParser = require("body-parser");
var express = require("express");
var logger = require("morgan");
var path = require("path");
var cors = require("cors");
var dotenv = require("dotenv");
var express_1 = require("express");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.app.use(logger("dev"));
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        dotenv.config();
        var rootDir = path.dirname(require.main.filename) + "/../";
        this.app.use('/', express.static(rootDir + 'assets/public'));
        this.app.use('/docs', express.static(rootDir + 'docs'));
        //API version initialization
        this.app.use("/v1", new v1_0().init());
        var port = this.normalizePort(process.env.PORT || "4004");
        this.server = this.app.listen(port);
        console.log("Listening port: " + port);
    }
    App.start = function () {
        return new App();
    };
    App.prototype.normalizePort = function (val) {
        var port = parseInt(val, 10);
        if (isNaN(port))
            return val;
        if (port >= 0)
            return port;
        return false;
    };
    return App;
}());
exports.App = App;
//Latest (v1.0)
var dev_1 = require("@http/dev");
var routes_1 = require("@http/routes");
var resources_1 = require("@http/resources");
var middlewares_1 = require("@http/middlewares");
var v1_0 = /** @class */ (function () {
    function v1_0() {
        this.router = express_1.Router();
    }
    v1_0.prototype.init = function () {
        this.router.use("/resources", new resources_1["default"]().init());
        this.router.use("/dev", new dev_1["default"]().init());
        this.router.use("/", new middlewares_1["default"]().init());
        this.router.use("/", new routes_1["default"]().init());
        return this.router;
    };
    return v1_0;
}());
//# sourceMappingURL=app.js.map
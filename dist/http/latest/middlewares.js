"use strict";
exports.__esModule = true;
var express_1 = require("express");
var middlewares_1 = require("@http/factories/middlewares");
var Middlewares = /** @class */ (function () {
    function Middlewares() {
        this.router = express_1.Router();
        this.auth = middlewares_1["default"].createAuthentication();
    }
    Middlewares.prototype.init = function () {
        var _this = this;
        this.router.get("*", function (req, res, next) { return _this.auth.authenticate(req, res, next); });
        return this.router;
    };
    return Middlewares;
}());
exports["default"] = Middlewares;
//# sourceMappingURL=middlewares.js.map
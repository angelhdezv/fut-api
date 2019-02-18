"use strict";
exports.__esModule = true;
var authentication_1 = require("@http/middlewares/authentication");
var Middlewares = /** @class */ (function () {
    function Middlewares() {
    }
    Middlewares.createAuthentication = function () {
        return new authentication_1["default"]();
    };
    return Middlewares;
}());
exports["default"] = Middlewares;
//# sourceMappingURL=middlewares.js.map
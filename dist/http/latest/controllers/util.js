"use strict";
exports.__esModule = true;
var Responses = /** @class */ (function () {
    function Responses() {
    }
    /**
     * Send a simple 200 response.
     */
    Responses.sendOk = function (res) {
        res.send("Ok");
    };
    /**
     * Send a json response with the information defined in the
     * toJSON() method of a Model.
     */
    Responses.sendModel = function (res, result) {
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(result ? result.toJSON() : {}));
    };
    /**
     * Send a json response with the information defined in the
     * toJSON() method of a Model collection.
     */
    Responses.sendList = function (res, result) {
        res.setHeader("Content-Type", "application/json");
        var out = [];
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var r = result_1[_i];
            out.push(r.toJSON());
        }
        res.send(JSON.stringify(out ? out : []));
    };
    /**
    * Send a json response with the information of any object.
    */
    Responses.sendObject = function (res, result) {
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(result ? result : {}));
    };
    return Responses;
}());
exports["default"] = Responses;
//# sourceMappingURL=util.js.map
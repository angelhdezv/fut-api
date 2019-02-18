"use strict";
exports.__esModule = true;
var Code;
(function (Code) {
    Code[Code["BAD_REQUEST"] = 402] = "BAD_REQUEST";
    Code[Code["UNAUTHORIZED"] = 403] = "UNAUTHORIZED";
})(Code || (Code = {}));
var Responses = /** @class */ (function () {
    function Responses() {
    }
    /**
     * Call next() method to continue to following handlers,
     * In other words it is an equivalent to success response.
     */
    Responses.next = function (next) {
        next();
    };
    /**
     * Send an error message based on response code.
     */
    Responses.sendError = function (res, code) {
        res.status(Code[code]);
        res.send(code.toLocaleString());
    };
    /**
     * Send a custom error message based on response code.
     */
    Responses.sendErrorMessage = function (res, code, message) {
        res.status(Code[code]);
        res.send(code.toLocaleString() + ": " + message);
    };
    return Responses;
}());
exports["default"] = Responses;
//# sourceMappingURL=util.js.map
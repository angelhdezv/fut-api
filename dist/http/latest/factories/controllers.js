"use strict";
exports.__esModule = true;
var players_1 = require("@http/controllers/players");
var Teams_1 = require("@http/controllers/Teams");
var Source_1 = require("@sql/Source");
var match_1 = require("@http/controllers/match");
var Controllers = /** @class */ (function () {
    function Controllers() {
    }
    Controllers.createPlayers = function () {
        return new players_1["default"](Source_1["default"].getInstance());
    };
    Controllers.createTeams = function () {
        return new Teams_1["default"]();
    };
    Controllers.createMatches = function () {
        return new match_1["default"]();
    };
    return Controllers;
}());
exports["default"] = Controllers;
//# sourceMappingURL=controllers.js.map
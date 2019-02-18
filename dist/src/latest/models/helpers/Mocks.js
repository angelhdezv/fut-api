"use strict";
exports.__esModule = true;
var Player_1 = require("@models/Player");
var Teams_1 = require("@models/Teams");
var Matches_1 = require("@models/Matches");
var Util_1 = require("@models/helpers/Util");
var Mocks = /** @class */ (function () {
    function Mocks() {
    }
    Mocks.Teams = function () {
        return [
            new Teams_1["default"](Util_1.Generator.getId()).build("Betis", this.Players()),
            new Teams_1["default"](Util_1.Generator.getId()).build("PSV", this.Players()),
            new Teams_1["default"](Util_1.Generator.getId()).build("West Ham", this.Players())
        ];
    };
    Mocks.Players = function () {
        return [
            new Player_1["default"](Util_1.Generator.getId()).build("Chuky Lozano ", this.Teams()[2]),
            new Player_1["default"](Util_1.Generator.getId()).build("Chicharito Hernandez ", this.Teams()[3]),
            new Player_1["default"](Util_1.Generator.getId()).build("Diego Lainez ", this.Teams()[1])
        ];
    };
    Mocks.Matches = function () {
        return [
            new Matches_1["default"](Util_1.Generator.getId()).build(this.Teams()[1], this.Teams()[2], [3, 2]),
            new Matches_1["default"](Util_1.Generator.getId()).build(this.Teams()[2], this.Teams()[3], [1, 0]),
            new Matches_1["default"](Util_1.Generator.getId()).build(this.Teams()[3], this.Teams()[1], [0, 4])
        ];
    };
    return Mocks;
}());
exports["default"] = Mocks;
//# sourceMappingURL=Mocks.js.map
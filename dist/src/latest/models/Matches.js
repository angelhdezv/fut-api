"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Model_1 = require("./Model");
var Matches = /** @class */ (function (_super) {
    __extends(Matches, _super);
    function Matches(id) {
        var _this = _super.call(this) || this;
        _this.id = id;
        return _this;
    }
    Matches.prototype.build = function (local, Visitante, Marcador) {
        this.Home = local;
        this.Visit = Visitante;
        this.Score = Marcador;
        return this;
    };
    Matches.prototype.toJSON = function () {
        return {
            id: this.id,
            Home: this.Home,
            Visit: this.Visit,
            Score: this.Score
        };
    };
    return Matches;
}(Model_1["default"]));
exports["default"] = Matches;
//# sourceMappingURL=Matches.js.map
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
var Player_1 = require("@models/Player");
var Teams_1 = require("@models/Teams");
var Matches_1 = require("@models/Matches");
var Mapper = /** @class */ (function () {
    function Mapper() {
    }
    Mapper.prototype.transformList = function (dataSet) {
        if (!dataSet)
            return [];
        var result = [];
        for (var _i = 0, dataSet_1 = dataSet; _i < dataSet_1.length; _i++) {
            var data = dataSet_1[_i];
            result.push(this.transform(data));
        }
        return result;
    };
    return Mapper;
}());
exports.Mapper = Mapper;
var PlayerMapper = /** @class */ (function (_super) {
    __extends(PlayerMapper, _super);
    function PlayerMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerMapper.prototype.transform = function (data) {
        return new Player_1["default"](data.id_player)
            .build(data.nombre, new Teams_1["default"](data.id_team));
    };
    return PlayerMapper;
}(Mapper));
exports.PlayerMapper = PlayerMapper;
var TeamsMapper = /** @class */ (function (_super) {
    __extends(TeamsMapper, _super);
    function TeamsMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TeamsMapper.prototype.transform = function (data) {
        return new Teams_1["default"](data.id_team)
            .build(data.nombre, []);
    };
    return TeamsMapper;
}(Mapper));
exports.TeamsMapper = TeamsMapper;
var MatchMapper = /** @class */ (function (_super) {
    __extends(MatchMapper, _super);
    function MatchMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchMapper.prototype.transform = function (data) {
        return new Matches_1["default"](data.id)
            .build(new Teams_1["default"](data.id_EquipoLocal), new Teams_1["default"](data.id_Equipovisitante), [data.golesLocal, data.golesVisit]);
    };
    return MatchMapper;
}(Mapper));
exports.MatchMapper = MatchMapper;
//# sourceMappingURL=Mappers.js.map
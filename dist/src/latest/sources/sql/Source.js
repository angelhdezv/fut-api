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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Util_1 = require("@models/helpers/Util");
var Teams_1 = require("@models/Teams");
var Executor_1 = require("./Executor");
var Mapper = require("./Mappers");
var Source = /** @class */ (function (_super) {
    __extends(Source, _super);
    function Source() {
        return _super.call(this) || this;
    }
    Source.prototype.getPlayersList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, filter, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT * FROM Player";
                        filter = [];
                        return [4 /*yield*/, this.get(query, filter, new Mapper.PlayerMapper())];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    Source.prototype.getTeamsList = function (teamId) {
        return __awaiter(this, void 0, void 0, function () {
            var query, filter, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT * FROM team";
                        filter = [];
                        if (teamId)
                            filter.push(new Util_1.Pair("id_team", teamId));
                        return [4 /*yield*/, this.get(query, filter, new Mapper.TeamsMapper())];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, this.fetchTeam(res)];
                }
            });
        });
    };
    Source.prototype.getPlayersDetails = function (playerId) {
        return __awaiter(this, void 0, void 0, function () {
            var query, params, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT * FROM Player WHERE id_player = ?";
                        params = [playerId];
                        return [4 /*yield*/, this.getDetails(query, params, new Mapper.PlayerMapper())];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res[0]];
                }
            });
        });
    };
    Source.prototype.getTeamsDetails = function (teamId) {
        return __awaiter(this, void 0, void 0, function () {
            var query, params, res, fetch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT * FROM team WHERE id_team = ?";
                        params = [teamId];
                        return [4 /*yield*/, this.getDetails(query, params, new Mapper.TeamsMapper())];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, this.fetchTeam(res)];
                    case 2:
                        fetch = _a.sent();
                        return [2 /*return*/, fetch[0]];
                }
            });
        });
    };
    Source.prototype.fetchTeam = function (teams) {
        return __awaiter(this, void 0, void 0, function () {
            var cQuery, _i, teams_1, team, players, cPlayers, _a, cPlayers_1, player, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        cQuery = "SELECT id_player FROM player WHERE id_team = ?";
                        _i = 0, teams_1 = teams;
                        _d.label = 1;
                    case 1:
                        if (!(_i < teams_1.length)) return [3 /*break*/, 8];
                        team = teams_1[_i];
                        players = [];
                        return [4 /*yield*/, this.getAny(cQuery, [team.id])];
                    case 2:
                        cPlayers = _d.sent();
                        _a = 0, cPlayers_1 = cPlayers;
                        _d.label = 3;
                    case 3:
                        if (!(_a < cPlayers_1.length)) return [3 /*break*/, 6];
                        player = cPlayers_1[_a];
                        _c = (_b = players).push;
                        return [4 /*yield*/, this.getPlayersDetails(player.id)];
                    case 4:
                        _c.apply(_b, [_d.sent()]);
                        _d.label = 5;
                    case 5:
                        _a++;
                        return [3 /*break*/, 3];
                    case 6:
                        Object.assign(teams, {
                            MyPlayers: players
                        });
                        _d.label = 7;
                    case 7:
                        _i++;
                        return [3 /*break*/, 1];
                    case 8: return [2 /*return*/, teams];
                }
            });
        });
    };
    Source.prototype.savePlayer = function (player) {
        return __awaiter(this, void 0, void 0, function () {
            var eQuery, exist, query, Team, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        eQuery = "SELECT id_player FROM player WHERE id_player = ?";
                        return [4 /*yield*/, this.getAny(eQuery, [player.id])];
                    case 1:
                        exist = _a.sent();
                        if (exist[0])
                            return [2 /*return*/, this.getPlayersDetails(player.id)];
                        query = "INSERT INTO player (id_player, nombre,id_team)";
                        return [4 /*yield*/, this.saveTeam(new Teams_1["default"](Util_1.Generator.getId()).build(player.team.toString()))];
                    case 2:
                        Team = _a.sent();
                        params = [player.id, player.name, Team.id];
                        return [4 /*yield*/, this.save(query, params)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, this.getPlayersDetails(player.id)];
                }
            });
        });
    };
    Source.prototype.setPlayer = function (playerId, Team) {
        return __awaiter(this, void 0, void 0, function () {
            var query, columns;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "UPDATE player";
                        columns = [];
                        if (Team)
                            columns.push(new Util_1.Pair("id_team", Team));
                        return [4 /*yield*/, this.set(query, columns, "id_player", playerId)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.getPlayersDetails(playerId)];
                }
            });
        });
    };
    Source.prototype.deletePlayer = function (playerId) {
        return __awaiter(this, void 0, void 0, function () {
            var query, params;
            return __generator(this, function (_a) {
                query = "DELETE FROM player " +
                    "WHERE id_player = ?";
                params = [playerId];
                return [2 /*return*/, this["delete"](query, params)];
            });
        });
    };
    Source.prototype.saveTeam = function (team) {
        return __awaiter(this, void 0, void 0, function () {
            var eQuery, exist, query, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        eQuery = "SELECT id_team FROM team WHERE nombre = ?";
                        return [4 /*yield*/, this.getAny(eQuery, [team.name])];
                    case 1:
                        exist = _a.sent();
                        if (exist[0])
                            return [2 /*return*/, this.getTeamsDetails(team.id)];
                        query = "INSERT INTO team (id_team, nombre)";
                        params = [team.id, team.name];
                        return [4 /*yield*/, this.save(query, params)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, this.getTeamsDetails(team.id)];
                }
            });
        });
    };
    Source.prototype.setTeam = function (teamId, name, players) {
        return __awaiter(this, void 0, void 0, function () {
            var query, columns, dQuery, cQuery, _i, players_1, c, player, cValues;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "UPDATE Team";
                        columns = [];
                        if (name)
                            columns.push(new Util_1.Pair("nombre", name));
                        return [4 /*yield*/, this.set(query, columns, "id_team", teamId)];
                    case 1:
                        _a.sent();
                        if (!players) return [3 /*break*/, 7];
                        dQuery = "DELETE FROM player WHERE id_team = ?";
                        return [4 /*yield*/, this["delete"](dQuery, [teamId])];
                    case 2:
                        _a.sent();
                        cQuery = "INSERT INTO player (id_player,nombre, id_team)";
                        _i = 0, players_1 = players;
                        _a.label = 3;
                    case 3:
                        if (!(_i < players_1.length)) return [3 /*break*/, 7];
                        c = players_1[_i];
                        return [4 /*yield*/, this.savePlayer(c)];
                    case 4:
                        player = _a.sent();
                        cValues = [Util_1.Generator.getId(), player.name, teamId];
                        return [4 /*yield*/, this.save(cQuery, cValues)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 3];
                    case 7: return [2 /*return*/, this.getTeamsDetails(teamId)];
                }
            });
        });
    };
    Source.prototype.deleteTeam = function (teamId) {
        return __awaiter(this, void 0, void 0, function () {
            var query, params;
            return __generator(this, function (_a) {
                query = "UPDATE player SET id_team=null WHERE id_team = ?;" +
                    "DELETE FROM project WHERE project_id = ?;";
                params = [teamId, teamId];
                return [2 /*return*/, this["delete"](query, params)];
            });
        });
    };
    Source.getInstance = function () { return this.instance || (this.instance = new this()); };
    return Source;
}(Executor_1["default"]));
exports["default"] = Source;
//# sourceMappingURL=Source.js.map
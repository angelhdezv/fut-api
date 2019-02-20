"use strict";
exports.__esModule = true;
var express_1 = require("express");
var controllers_1 = require("@http/factories/controllers");
var Routes = /** @class */ (function () {
    function Routes() {
        this.router = express_1.Router();
        this.players = controllers_1["default"].createPlayers();
        this.teams = controllers_1["default"].createTeams();
        this.match = controllers_1["default"].createMatches();
    }
    Routes.prototype.init = function () {
        /**
         * @api {get} /pets/:id Get pet details
         * @apiName GetPetDetails
         * @apiGroup Pets
         * @apiVersion 0.1.0
         *
         * @apiParam {Number} id Pet identifier.
         * @apiSuccessExample {json} Success-Response:
         *  HTTP/1.1 200 OK
            {
              "id": 1,
              "name": "Frida",
              "animal": "Dog",
              "photo": "https://www.debate.com.mx/export/sites/debate/img/2017/10/13/frida_ap2.jpeg_715265926.jpeg",
              "toys": [@toys]
            }
          */
        var _this = this;
        this.router.get("/players/:id", function (req, res) { return _this.players.getDetails(req, res); });
        /**
         * @api {get} /players Get player list
         * @apiName GetPlayersList
         * @apiGroup Players
         * @apiVersion 0.1.0
        */
        this.router.get("/players", function (req, res) { return _this.players.getList(req, res); });
        /**
         * @api {post} /players Save a player
         * @apiName SavePlayer
         * @apiGroup Players
         * @apiVersion 0.1.0
         *
         * @apiParam {String} name Player name.
         * @apiParam {Number[]} [teams] Teams identifiers
         *
         * @apiSuccess {Player} player Player object.
        */
        this.router.post("/players/:id/:name/:team", function (req, res) { return _this.players.save(req, res); });
        /**
         * @api {put} /pets/:id Update a pet
         * @apiName UpdatePlayer
         * @apiGroup Players
         * @apiVersion 0.1.0
         *
        * @apiParam {String} name Player name.
         * @apiParam {Number[]} [teams] Teams identifiers
         *
         * @apiSuccess {Player} player Player object.
        */
        this.router.put("/players/:id/:name?/:team", function (req, res) { return _this.players.update(req, res); });
        /**
         * @api {put} /players/:id put a player
         * @apiName PutPlayer
         * @apiGroup Players
         * @apiVersion 0.1.0
         *
         * @apiParam {Number} id Player identifier.
        */
        this.router["delete"]("/players/:id", function (req, res) { return _this.players["delete"](req, res); });
        /**
         * @api {delete} /players/:id Delete a player
         * @apiName DeletePlayer
         * @apiGroup Players
         * @apiVersion 0.1.0
         *
         * @apiParam {Number} id Player identifier.
        */
        this.router.get("/teams", function (req, res) { return _this.teams.getList(req, res); });
        /**
         * @api {get} /teams Get teams list
         * @apiName GetTeamList
         * @apiGroup Teams
         *
         * @apiVersion 0.1.0
         *
         * @apiParam {String} name Player name.
         * @apiParam {Number[]} id Teams identifiers
         *
         * @apiSuccess {Team} team Team object.
        */
        this.router.get("/matches", function (req, res) { return _this.match.getList(req, res); });
        /**
     * @api {matches} /matches Get matches list
     * @apiName GetMatchesList
     * @apiGroup Matches
     * @apiVersion 0.1.0
     *
     *
     * @apiParam {Number} [teams] Teams identifiers
     * @apiParam {Number} [teams] Teams identifiers
     *
     * @apiSuccess {matches} matches Matches object.
    */
        return this.router;
    };
    return Routes;
}());
exports["default"] = Routes;
//# sourceMappingURL=routes.js.map
"use strict";
exports.__esModule = true;
var mysql = require("mysql");
/**
 * Base class to handle common database operations.
 */
var Executor = /** @class */ (function () {
    function Executor() {
        this.sql = mysql.createConnection({
            host: process.env.SQL_HOST,
            user: process.env.SQL_USER,
            password: process.env.SQL_PASSWORD,
            database: process.env.SQL_DATABASE,
            multipleStatements: true,
            insecureAuth: true
        });
    }
    /**
     * Get a model collection based on filter conditions.
     * Example:
     *  - Query: SELECT t.* FROM toys t
     *  - Filters: [new Pair(t.pet_id, 1)]
     *  - Mapper: ToyMapper
     *
     * @param  {string} query Base query.
     * @param  {Pair[]} filters Filter collection, equivalente to WHERE conditions.
     * @param  {Mapper<T>} mapper Mapper object relative to the result.
     */
    Executor.prototype.get = function (query, filters, mapper) {
        var _this = this;
        var params = [];
        var where = " WHERE true = true";
        for (var _i = 0, filters_1 = filters; _i < filters_1.length; _i++) {
            var filter = filters_1[_i];
            where += " AND " + filter.key + " = ?";
            params.push(filter.value);
        }
        query = query + where;
        return new Promise(function (resolve, reject) {
            _this.sql.query(query, params, function (err, result) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    var res = mapper.transformList(result);
                    resolve(res);
                }
                else
                    resolve([]);
            });
        });
    };
    /**
     *
     * Get a model collection based on params conditions.
     * Example:
     *  - Query: SELECT t.* FROM toys t WHERE t.pet_id = ?
     *  - Filters: [1]
     *  - Mapper: ToyMapper
     *
     * @param  {string} query Base query.
     * @param  {any[]} params Params collection.
     * @param  {Mapper<T>} mapper  Mapper object relative to the result.
     */
    Executor.prototype.getDetails = function (query, params, mapper) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sql.query(query, params, function (err, result) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    var res = mapper.transformList(result);
                    resolve(res);
                }
                else
                    resolve([]);
            });
        });
    };
    /**
     * Get a generic (non mapped) collection based on params conditions.
     * Example:
     *  - Query: SELECT t.* FROM toys t WHERE t.pet_id = ?
     *  - params: [1]
     *
     * @param  {string} query Base query.
     * @param  {any[]} params Params collection.
     */
    Executor.prototype.getAny = function (query, params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sql.query(query, params, function (err, result) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    resolve(result);
                }
                else
                    resolve([]);
            });
        });
    };
    /**
     * Execute a save query.
     * Example:
     *  - Query: INSERT INTO pet (pet_id, name)";
     *  - Params: [1, 'tony']
     *
     * @param  {string} query Base query
     * @param  {any[]} params Params collection.
     */
    Executor.prototype.save = function (query, params) {
        var _this = this;
        var values = " VALUES (";
        for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
            var p = params_1[_i];
            values += "?,";
        }
        values = params.length > 0 ? values.slice(0, -1) + ")" : values + ")";
        query = query + values;
        return new Promise(function (resolve, reject) {
            _this.sql.query(query, params, function (err, result) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    /**
     * Execute a set query.
     * Example:
     *  - Query: UPDATE pet";
     *  - Columns: [new Pair('name', 'juan')]
     *  - keyCol: pet_id
     *  - keyVal: 1
     *
     * @param  {string} query Base query
     * @param  {Pair[]} columns Set collection to modify, equivalente to SET conditions.
     * @param  {string} keyCol Column name of primary key
     * @param  {number} keyVal Value of primary key
     */
    Executor.prototype.set = function (query, columns, keyCol, keyVal) {
        var _this = this;
        var params = [];
        var set = " SET " + keyCol + " = " + keyCol + ",";
        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
            var col = columns_1[_i];
            set += " " + col.key + " = ?,";
            params.push(col.value);
        }
        set = set.slice(0, -1);
        var where = " WHERE " + keyCol + " = ?";
        query = query + set + where;
        params.push(keyVal);
        return new Promise(function (resolve, reject) {
            _this.sql.query(query, params, function (err, result) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    /**
     * Execute a delete query.
     * Example:
     *  - Query: DELETE FROM credential WHERE credential_id = ?";
     *  - Params: [1]
     *
     * @param  {string} query Base query
     * @param  {number[]} params Params collection (identifiers)
     */
    Executor.prototype["delete"] = function (query, params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sql.query(query, params, function (err, result) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    /**
     * Execute a generic query.
     * Suggested use: modifications in the database schema.
     * Example:
     *  - Query: DROP TABLE pets
     *
     * @param  {string} query Complete query.
     */
    Executor.prototype.execute = function (query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sql.query(query, [], function (err, result) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    return Executor;
}());
exports["default"] = Executor;
//# sourceMappingURL=Executor.js.map
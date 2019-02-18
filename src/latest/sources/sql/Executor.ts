import * as mysql from "mysql";
import { Pair } from "@models/helpers/Util";
import { Mapper } from "./Mappers";

/**
 * Base class to handle common database operations.
 */

class Executor
{
  protected sql;

  protected constructor()
  {
    this.sql = mysql.createConnection({
      host: process.env.SQL_HOST,
      user: process.env.SQL_USER,
      password: process.env.SQL_PASSWORD,
      database: process.env.SQL_DATABASE,
      multipleStatements: true,
      insecureAuth:true
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

  protected get<T>(query: string, filters: Pair[], mapper: Mapper<T>): Promise<T[]>
  {
    const params = [];
    let where = " WHERE true = true";
    for (let filter of filters) {
      where += ` AND ${filter.key} = ?`;
      params.push(filter.value);
    }
    query = query + where;

    return new Promise((resolve, reject) =>
    {
      this.sql.query(query, params, function (err, result)
      {
        if (err) return reject(err);
        if (result.length > 0) {
          const res = mapper.transformList(result);
          resolve(res);
        } else resolve([]);
      });
    });
  }

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

  protected getDetails<T>(query: string, params: any[], mapper: Mapper<T>): Promise<T[]>
  {
    return new Promise((resolve, reject) =>
    {
      this.sql.query(query, params, function (err, result)
      {
        if (err) return reject(err);
        if (result.length > 0) {
          const res = mapper.transformList(result);
          resolve(res);
        } else resolve([]);
      });
    });
  }

  /**
   * Get a generic (non mapped) collection based on params conditions.
   * Example:
   *  - Query: SELECT t.* FROM toys t WHERE t.pet_id = ?
   *  - params: [1]
   *
   * @param  {string} query Base query.
   * @param  {any[]} params Params collection.
   */

  protected getAny(query: string, params: any[]): Promise<any>
  {
    return new Promise((resolve, reject) =>
    {
      this.sql.query(query, params, function (err, result)
      {
        if (err) return reject(err);
        if (result.length > 0) {
          resolve(result);
        } else resolve([]);
      });
    });
  }

  /**
   * Execute a save query.
   * Example:
   *  - Query: INSERT INTO pet (pet_id, name)";
   *  - Params: [1, 'tony']
   *
   * @param  {string} query Base query
   * @param  {any[]} params Params collection.
   */

  protected save(query: string, params: any[]): Promise<void>
  {
    let values = " VALUES (";
    for (let p of params) values += "?,";
    values = params.length > 0 ? values.slice(0, -1) + ")" : values + ")";
    query = query + values;

    return new Promise((resolve, reject) =>
    {
      this.sql.query(query, params, function (err, result)
      {
        if (err) return reject(err);
        resolve();
      });
    });
  }

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

  protected set(query: string, columns: Pair[], keyCol: string, keyVal: number): Promise<void>
  {
    const params = [];
    let set = ` SET ${keyCol} = ${keyCol},`;
    for (let col of columns) {
      set += ` ${col.key} = ?,`;
      params.push(col.value);
    }
    set = set.slice(0, -1);
    let where = ` WHERE ${keyCol} = ?`;
    query = query + set + where;
    params.push(keyVal);

    return new Promise((resolve, reject) =>
    {
      this.sql.query(query, params, function (err, result)
      {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  /**
   * Execute a delete query.
   * Example:
   *  - Query: DELETE FROM credential WHERE credential_id = ?";
   *  - Params: [1]
   *
   * @param  {string} query Base query
   * @param  {number[]} params Params collection (identifiers)
   */

  protected delete(query: string, params: number[]): Promise<void>
  {
    return new Promise((resolve, reject) =>
    {
      this.sql.query(query, params, function (err, result)
      {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  /**
   * Execute a generic query.
   * Suggested use: modifications in the database schema.
   * Example:
   *  - Query: DROP TABLE pets
   *
   * @param  {string} query Complete query.
   */

  protected execute(query: string): Promise<void>
  {
    return new Promise((resolve, reject) =>
    {
      this.sql.query(query, [], function (err, result)
      {
        if (err) return reject(err);
        resolve();
      });
    });
  }
}

export default Executor;
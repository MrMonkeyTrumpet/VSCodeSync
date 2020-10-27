const database = require('../services/database.js');
const oracledb = require('oracledb')
 
const baseQuery = 
 `select *
  from fred`;
 
async function find(context) {
  let query = baseQuery;
  const binds = {};
 
  if (context.id) {
    binds.id = context.id;
 
    query += `\nwhere id = :id`;
  }
 
  const result = await database.simpleExecute(query, binds);
 
  return result.rows;
}
 
module.exports.find = find;

const createSql =
 `insert into fred (
    description
  ) values (
    :description
  ) returning id
  into :id`;
 
async function create(fre) {
  const fred = Object.assign({}, fre);
 
  fred.id = {
    dir: oracledb.BIND_OUT,
    type: oracledb.NUMBER
  }
 
  const result = await database.simpleExecute(createSql, fred);
 
  fred.id = result.outBinds.id[0];
 
  return fred;
}
 
module.exports.create = create;

const updateSql =
 `update fred
  set description = :description
  where id = :id`;
 
async function update(fre) {
  const fred = Object.assign({}, fre);
  const result = await database.simpleExecute(updateSql, fred);
 
  if (result.rowsAffected && result.rowsAffected === 1) {
    return fred;
  } else {
    return null;
  }
}
 
module.exports.update = update;


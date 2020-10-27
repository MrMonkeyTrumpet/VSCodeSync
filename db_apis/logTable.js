const database = require('../services/database.js');
const oracledb = require('oracledb')
 
const baseQuery = 
 `select
  logtimestamp 
 ,LOGGERNAME
 ,LOGLEVEL
 ,LOGMARKER
 ,LOGLOCATION
 ,LOGMESSAGE
 ,LOGUSER
 ,LOGID
  from log_table`;
 
async function getAll(context) {
  let query = baseQuery;
  const binds = {};
 
  const result = await database.simpleExecute(query, binds);
 
  return result.rows;
}
 
module.exports.getAll = getAll;


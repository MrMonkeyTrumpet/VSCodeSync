const oracledb = require('oracledb');
const dbConfig = require('../config/database.js');
 
async function initialize() {
  console.log('Setup Database');

  oracledb.fetchAsString = [oracledb.DATE];

  const pool = await oracledb.createPool(dbConfig.ramsPool);
}

module.exports.initialize = initialize;

async function close() {
    await oracledb.getPool('RAMS').close(0);
  }
module.exports.close = close;

function simpleExecute(statement, binds = [], opts = {}) {
    return new Promise(async (resolve, reject) => {
      let conn;
   
      opts.outFormat = oracledb.OBJECT;
      opts.autoCommit = true;
      
      try {
        conn = await oracledb.getConnection('RAMS') ;
   
        const result = await conn.execute(statement, binds, opts);
   
        resolve(result);
      } catch (err) {
        reject(err);
      } finally {
        if (conn) { // conn assignment worked, need to close
          try {
            await conn.close();
          } catch (err) {
            console.log(err);
          }
        }
      }
    });
  }
   
  module.exports.simpleExecute = simpleExecute;
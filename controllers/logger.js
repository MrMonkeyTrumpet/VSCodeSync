const freds = require('../db_apis/logger.js');
 
async function get(req, res, next) {
  try {
    const context = {};
 
    const rows = await logger.find(context);
 
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
 
module.exports.get = get;


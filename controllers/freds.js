const freds = require('../db_apis/freds.js');
 
async function get(req, res, next) {
  try {
    const context = {};
 
    context.id = parseInt(req.params.id, 10);
 
    const rows = await freds.find(context);
 
    if (req.params.id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).end();
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}
 
module.exports.get = get;

function getFredFromRec(req) {
    const fred = {
      id: req.body.id,
      description: req.body.description
    };
   
    return fred;
  }

  async function post(req, res, next) {
    try {
      let fred = getFredFromRec(req);
   
      fred = await freds.create(fred);
   
      res.status(201).json(fred);
    } catch (err) {
      next(err);
    }
  }
   
  module.exports.post = post;

  async function put(req, res, next) {
    try {
      let fred = getFredFromRec(req);
   
      fred.id = parseInt(req.params.id, 10);
   
      fred = await freds.update(fred);
   
      if (fred !== null) {
        res.status(200).json(fred);
      } else {
        res.status(404).end();
      }
    } catch (err) {
      next(err);
    }
  }
   
  module.exports.put = put;

  async function del(req, res, next) {
    // empty
  }

  module.exports.del = del;
const express = require('express');
const router = new express.Router();
const freds = require('../controllers/freds.js');
const logger = require('../controllers/logger.js');
const logTable = require('../controllers/logTable.js');

 
router.route('/freds/:id?')
  .get(freds.get)
  .post(freds.post)
  .put(freds.put)
  .delete(freds.del);
 
router.route('/log?')
  .get(logger.get);

router.route('/logtable/:id?')
  .get(logTable.get)
 


module.exports = router;
let express = require('express');
let router = express.Router();

let controller = require('../controllers/discussController');
router.get('/', controller.getAll);
router.get('/:id', controller.getById);

module.exports = router;
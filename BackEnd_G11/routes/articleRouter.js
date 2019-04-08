let express = require('express');
let router = express.Router();

let controller = require('../controllers/articleController');
router.get('/', controller.getAll);
router.get('/:id', controller.getById);

module.exports = router;
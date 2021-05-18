const router = require('express').Router();
const controller = require('./movies.controller');
const methodnotallowed = require('../_errors/methodnotallowed');

router.route('/').get(controller.list).all(methodnotallowed);
router.route('/:movieId').get(controller.read).all(methodnotallowed);

module.exports = router;

const router = require('express').Router({ mergeParams: true });
const controller = require('./theaters.controller');
const methodnotallowed = require('../_errors/methodnotallowed');

router.route('/').get(controller.list).all(methodnotallowed);

module.exports = router;
const router = require('express').Router({ mergeParams: true });
const controller = require('./movies_theaters.controller');
const methodnotallowed = require('../_errors/methodnotallowed');

router.route('/').get(controller.findTheatersPlaying).all(methodnotallowed);

module.exports = router;

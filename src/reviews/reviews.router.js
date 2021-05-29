const router = require('express').Router({ mergeParams: true });
const controller = require('./reviews.controller');
const methodnotallowed = require('../_errors/methodnotallowed');

router.route('/').get(controller.findMovieReviews).all(methodnotallowed);
router.route('/:reviewId').delete(controller.delete).all(methodnotallowed);

module.exports = router;

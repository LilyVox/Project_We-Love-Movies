const router = require('express').Router({mergeParams: true});
const controller = require('./movies.controller');
const mtRouter = require('../movies_theaters/movies_theaters.router');
const revRouter = require('../reviews/reviews.router');
const methodnotallowed = require('../_errors/methodnotallowed');

router.use('/:movieId/theaters', controller.validateMovieID, mtRouter);
router.use('/:movieId/reviews', controller.validateMovieID, revRouter);
router.route('/:movieId').get(controller.read).all(methodnotallowed);
router.route('/').get(controller.list).all(methodnotallowed);

module.exports = router;

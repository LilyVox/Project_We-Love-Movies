const service = require('./reviews.service');
const reduceProps = require('../utils/reduce-properties');
let addCritic = reduceProps('review_id', {
  preferred_name: ['critic', 'preferred_name'],
  surname: ['critic', 'surname'],
  organization_name: ['critic', 'organization_name'],
});

async function findMovieReviews(req, res) {
  const movieToLookUp = res.locals.movie;
  const reviewsForMovie = await service.findMovieReviews(movieToLookUp.movie_id);
  let data = addCritic(reviewsForMovie);
  res.status(200).json({ data });
}
async function doesReviewExist(req, res, next) {
  const { reviewId } = req.params;
  req.log.info({ __filename }, reviewId);
  if (!!reviewId) {
    const reviewArticle = await service.read(reviewId);
    req.log.info({ __filename }, reviewArticle);
    if (reviewArticle != undefined) {
      res.locals.review = reviewArticle;
      return next();
    }
  }
  return next({ status: 404, message: `Review cannot be found.` });
}
async function isReviewDataGood(req, res, next) {
  const { data } = req.body;
  //
}
async function update(req, res) {}
async function destroy(req, res) {
  await service.delete(req.params.reviewId);
  res.sendStatus(204);
}

module.exports = {
  findMovieReviews,
  delete: [doesReviewExist, destroy],
};

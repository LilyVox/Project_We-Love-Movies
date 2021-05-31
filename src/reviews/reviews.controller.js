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
  console.trace({ __filename }, reviewId);
  if (!!reviewId) {
    res.locals.reviewId = reviewId;
    const reviewArticle = await service.read(reviewId);
    console.trace({ __filename }, reviewArticle);
    if (reviewArticle != undefined) {
      res.locals.review = reviewArticle;
      return next();
    }
  }
  return next({ status: 404, message: `Review cannot be found.` });
}
async function isReviewDataGood(req, res, next) {
  const { data } = req.body;
  if (!'content' in data) return next({ status: 400, message: 'Missing content' });
  if (!'score' in data) return next({ status: 400, message: 'Missing score' });
  res.locals.bodyReview = data;
  return next();
  //
}
async function update(req, res) {
  const updateSuccess = await service.update(res.locals.bodyReview, res.locals.reviewId);
  const data = await service.readPostupdate(updateSuccess, res.locals.reviewId);
  console.trace({ __filename, data });
  res.json({ data: addCritic(data)[0] });
}
async function destroy(req, res) {
  await service.delete(req.params.reviewId);
  res.sendStatus(204);
}

module.exports = {
  update: [doesReviewExist, isReviewDataGood, update],
  delete: [doesReviewExist, destroy],
  findMovieReviews,
};

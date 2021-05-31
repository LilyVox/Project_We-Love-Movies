const knex = require('../db/connection');

function findMovieReviews(movie_id) {
  return knex('reviews')
    .join('movies', 'movies.movie_id', 'reviews.movie_id')
    .join('critics', 'critics.critic_id', 'reviews.critic_id')
    .select('reviews.*', 'movies.movie_id', 'critics.*')
    .where({ 'movies.movie_id': movie_id });
}
function read(review_id) {
  return knex('reviews').select('*').where({ review_id }).first();
}
function readPostupdate(success, review_id) {
  if (success !== 1) return next({ status: 500, message: 'update failed' });
  return knex('reviews')
    .join('critics', 'reviews.critic_id', 'critics.critic_id')
    .select('*')
    .where({ review_id });
}
function update(newReview, review_id) {
  return knex('reviews').where({ review_id }).update(newReview);
}
function destroy(review_id) {
  return knex('reviews').del().where({ review_id });
}
module.exports = {
  readPostupdate,
  findMovieReviews,
  read,
  update,
  delete: destroy,
};

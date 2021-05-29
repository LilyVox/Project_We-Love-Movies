const knex = require('../db/connection');

function findMovieReviews(movie_id) {
  return knex('reviews')
    .join('movies', 'movies.movie_id', 'reviews.movie_id')
    .join('critics', 'critics.critic_id', 'reviews.critic_id')
    .select('reviews.*','movies.movie_id','critics.*',)
    .where({ 'movies.movie_id': movie_id });
}
function read(review_id){
  return knex('reviews').select('*').where({review_id}).first();
}
function destroy(review_id){
  return knex('reviews').del().where({review_id});
}
module.exports = {
  findMovieReviews,
  read,
  delete: destroy,
};

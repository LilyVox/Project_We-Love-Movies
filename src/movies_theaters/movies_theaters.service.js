const knex = require('../db/connection');

function findTheatersPlaying(movie_id) {
  return knex('movies_theaters')
    .join('movies', 'movies.movie_id', 'movies_theaters.movie_id')
    .join('theaters', 'theaters.theater_id', 'movies_theaters.theater_id')
    .select('theaters.*','movies_theaters.is_showing', 'movies.movie_id')
    .where({ 'movies.movie_id': movie_id });
}
module.exports = {
  findTheatersPlaying,
};

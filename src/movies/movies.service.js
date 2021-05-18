const knex = require('../db/connection');
const mapProperties = require('../utils/map-properties');

function list(isActive) {
  return isActive
    ? knex('movies_theaters')
        .join('movies as m', 'm.movie_id', 'movies_theaters.movie_id')
        .select('m.*').distinct('m.movie_id')
        .where({'is_showing': true})
    : knex('movies').select('*');
}

function read(movieId){
  return knex('movies').select('*').where({movie_id: movieId}).first();
}

module.exports = {
  list,
  read,
};

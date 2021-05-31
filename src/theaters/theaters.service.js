const knex = require('../db/connection');

function list() {
  return knex('theaters as t')
    .select('t.*', 'm.*')
    .innerJoin('movies_theaters as mt', 't.theater_id', 'mt.theater_id')
    .leftJoin('movies as m', 'mt.movie_id', 'm.movie_id');
}

module.exports = {
  list,
};

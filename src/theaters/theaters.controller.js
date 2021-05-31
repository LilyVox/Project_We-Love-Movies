const service = require('./theaters.service');
const reduceProps = require('../utils/reduce-properties');
const addMovies = reduceProps('theater_id',{
  'movie_id':['movies', null, 'movie_id'],
  'title':['movies', null, 'title'],
  'runtime_in_minutes':['movies', null, 'runtime_in_minutes'],
  'rating':['movies', null, 'rating'],
  'description':['movies', null, 'description'],
  'image_url':['movies', null,'image_url'],
  'is_showing':['movies', null, 'is_showing'],
  'theater_id':['movies', null, 'theater_id'],
})

async function list(req, res) {
  const theaters = await service.list();
  res.status(200).json({ data: addMovies(theaters) });
}

module.exports = {
  list,
  
}
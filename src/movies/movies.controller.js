const service = require('./movies.service');

async function validateMovieID(req, res, next) {
  const { movieId } = req.params;
  if (movieId === undefined) return next({ status: 400, message: 'Invalid movie ID' });
  await service
    .read(movieId)
    .then((movie) => {
      if ('movie_id' in movie) res.locals.movie = movie;
    })
    .catch((e) => {
      next({ status: 404, message: `Movie cannot be found` });
    });
  if (!res.locals.movie) next({ status: 404, message: `Movie cannot be found` });
  return next();
}

async function list(req, res) {
  const { is_showing } = req.query;
  const movies = await service.list(is_showing ? true : false);
  res.status(200).json({ data: movies });
}
function read(_req, res, _next) {
  res.status(200).json({ data: res.locals.movie });
}

module.exports = {
  list: [list],
  read: [validateMovieID, read],
  validateMovieID,
};

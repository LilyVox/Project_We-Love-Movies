const service = require('./movies.service');

async function list(req, res) {
  const {is_showing} = req.query;
  const movies = await service.list(is_showing? true: false);
  res.status(200).json({ data: movies });
}
async function read(req, res, next) {

  const {movieId} = req.params;
  const {data: request} = req.body;
  if(movieId === undefined) return next({status: 400, message: 'Invalid'}); 
  const movie = await service.read(movieId);
  res.status(200).json({data: movie})
}

module.exports = {
  list: [list],
  read: [read],
};

const service = require('./movies_theaters.service');

async function findTheatersPlaying(req, res){
  const movieToLookUp = res.locals.movie;
  req.log.debug({__filename}, movieToLookUp)
  const activeTheaters = await service.findTheatersPlaying(movieToLookUp.movie_id);
  req.log.info({__filename}, activeTheaters)
  res.status(200).json({data: activeTheaters});
}

module.exports = {
  findTheatersPlaying,
}
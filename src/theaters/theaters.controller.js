const service = require('./theaters.service');

async function list(req, res) {
  const theaters = await service.list();
  res.status(200).json({ data: theaters });
}

module.exports = {
  list,
  
}
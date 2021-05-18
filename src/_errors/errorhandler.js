function errorhandler(error, request, response, next) {
  const { status = 500, message = 'Something went wrong!' } = error;
  response.status(status).json({ data: message });
}
module.exports = errorhandler;

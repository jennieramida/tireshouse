module.exports = (err, req, res, next) => {
  const message = process.env.NODE_ENV === 'development' ? err.message : null;
  const status = err.status || 500;
  console.log(err.message);
  const handlingOuput = {"status":status,"error": [err.message]};
  console.log(handlingOuput)
  res.status(status).json(handlingOuput);
};
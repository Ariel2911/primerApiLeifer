const handleHttpError = (res, message = "Algo salió mal", code = 403) => {
  res.status(code);
  res.status({ error: message });
};

module.exports = { handleHttpError };
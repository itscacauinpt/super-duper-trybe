const rescue = action => async (request, response, next) => {
  try {
    await action(request, response, next);
  } catch (error) {
    next(error);
  }
}

async function verify(req, res, next) {
  const { id } = req.params;
  if (!id) return res.status(404).json({ message: 'Not found' });

  next();
}

module.exports = {
  rescue,
  verify,
};
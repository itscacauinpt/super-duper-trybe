const rescue = action => async (request, response, next) => {
  try {
    await action(request, response, next);
  } catch (error) {
    next(error);
  }
}

module.exports = rescue;
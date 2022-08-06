const rescue = action => async (request, response, next) => {
  try {
    await action(request, response, next);
  } catch (error) {
    next(error);
  }
}

// async function rescue(_req, res, next) {

//   if (!author) return res.status(404).json({ message: 'Not found' });
// }

module.exports = rescue;
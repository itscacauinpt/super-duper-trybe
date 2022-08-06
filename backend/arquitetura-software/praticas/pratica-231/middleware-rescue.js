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

const isValid = (firstName, middleName, lastName) => {
	if (!firstName || typeof firstName !== 'string') return false;
	if (!lastName || typeof lastName !== 'string') return false;
	if (middleName && typeof middleName !== 'string') return false;

	return true;
};

async function verifyAuthor(req, res, next) {
  const { first_name, middle_name, last_name } = req.body;

	if (!isValid(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

  next();
}

module.exports = {
  rescue,
  verify,
  verifyAuthor,
};
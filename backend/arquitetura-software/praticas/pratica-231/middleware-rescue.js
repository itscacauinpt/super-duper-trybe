const rescue = action => async (request, response, next) => {
  try {
    await action(request, response, next);
  } catch (error) {
    next(error);
  }
}

async function verifyId(req, res, next) {
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

async function verifyAuthorPost(req, res, next) {
  const { first_name, middle_name, last_name } = req.body;

	if (!isValid(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

  next();
}

//verificando novos livros
// Título precisa ter pelo menos três caracteres;
// O campo author_id só é válido se existir uma pessoa autora com esse id;
const isBookValid = (title, author_id) => {
  if (!title || title.length < 3) return false;
  if (!verifyId(author_id)) return false;
  if (!author_id) return false;

  return true;
}

async function verifyBookPost(req, res, next) {
  const { title, author_id } = req.body;

  if (!isBookValid(title, author_id)) {
    return res.status(400).json({ message: 'Dados inválidos!' });
  }

  next();
}

module.exports = {
  rescue,
  verifyId,
  verifyAuthorPost,
  verifyBookPost,
};
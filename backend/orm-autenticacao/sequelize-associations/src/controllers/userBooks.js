const service = require('../services/userBooks');

const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await service.getOne(id);

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
};

module.exports = {
  getOne,
};
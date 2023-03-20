const { Books, User } = require('../models');

const getOne = () => {
  return User.findOne({
    where: { userId: id },
    include: [{ model: Books, as: 'books', through: { attributes: [] } }],
  });
}

module.exports = {
  getOne,
}
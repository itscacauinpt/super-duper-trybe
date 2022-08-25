const { Address, Employee } = require('./models');

const getAll = async () => {
  // return Product.findAll();
  return Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });
};

const getById = async (id) => {
  // return Product.findByPk(id);

  // eager loading:
  // const employee = await Employee.findOne({
  //     where: { id },
  //     
  //     // include: [{ model: Address, as: 'addresses' }],
  //     include: [{model: Address, as: 'addresses', attributes: { exclude: ['employeeId', 'number'] },}]
  //   });

  // lazy loading:
  return Employee.findOne({ where: { id } });
}

const findAll = () => {
  return Address.findAll({
    where: { employeeId: id },
    attributes: { exclude: ['employeeId', 'number'] } });
}

module.exports = {
  getAll,
  getById,
  findAll,
};
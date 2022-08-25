const { Address, Employee } = require('./models');

const getAll = async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      // nice isso aqui vium
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
};

// http://localhost:3000/employees/1
// ?includeAddresses=true
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    // eager loading:
    // const employee = await Employee.findOne({
    //     where: { id },
    //     
    //     // include: [{ model: Address, as: 'addresses' }],
    //     include: [{model: Address, as: 'addresses', attributes: { exclude: ['employeeId', 'number'] },}]
    //   });

    // lazy loading:
    const employee = await Employee.findOne({ where: { id } });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    // query string includeAddresses
    if (req.query.includeAddresses === 'true') {
      const addresses = await Address.findAll({
        where: { employeeId: id },
        attributes: { exclude: ['employeeId', 'number'] } });

      return res.status(200).json({ employee, addresses });
    }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
};

module.exports = {
  getAll,
  getById,
};
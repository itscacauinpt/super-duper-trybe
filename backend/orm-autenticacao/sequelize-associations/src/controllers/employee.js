const service = require('../services/employee');
// const { Address } = require('./models');

const getAll = async (_req, res) => {
  try {
    const employees = await service.getAll();

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
    const employee = await service.getById(id);

    if (!employee) {
      return res.status(404).json({ message: 'Funcionário não encontrado' });
    }

    // query string includeAddresses
    if (req.query.includeAddresses === 'true') {
      const {employee, addresses} = await service.findAll();

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
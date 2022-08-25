// index.js
const express = require('express');
const { Address, Employee, Books, User } = require('./models');

const app = express();

app.get('/employees', async (_req, res) => {
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
});

// http://localhost:3000/employees/1
// ?includeAddresses=true
app.get('/employees/:id', async (req, res) => {
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
});

app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Books, as: 'books', through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;
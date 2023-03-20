// verificação sem Joi
async function verifyUser(req, res, next) {
  const { first_name, last_name, email, password } = req.body;

  if(!first_name || !last_name || !email || !password) {
    return res.status(400).json({ mesage: 'Todo os campos são obrigatórios' });
  }

  if (typeof password !== 'string' || password.length < 6) {
    return res.status(400).json({ message: 'A senha/password precisa ter no mínimo 6 caracteres.' });
  }

  next();
}

// verificação com Joi
// const Joi = require('joi');

// const userSchema = Joi.object({
// 	firstName: Joi
//     .string()
//     .required(),

// 	lastName: Joi
//     .string()
//     .required(),

// 	email: Joi
//     .string()
//     .email()
//     .required(),

// 	password: Joi
//     .string()
//     .min(6)
//     .required()
// });

// function verifyUser(req, res, next) {
//   const { first_name, last_name, email, password } = req.body;

//   if(!userSchema.validateAsync(first_name, last_name, email, password)) {
//     return res.status(400).json({ mesage: 'Todo os campos são obrigatórios' });
//   }

//   // if (typeof password !== 'string' || password.length < 6) {
//   //   return res.status(400).json({ message: 'A senha/password precisa ter no mínimo 6 caracteres.' });
//   // }

//   // try {
//   //   // const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
//   //   const validation = userSchema.validate({ first_name, last_name, email, password });
//   //   return res.status(201).json({ message: 'Created!' });
//   // }
//   // catch (err) {

//   // }
//   next();
// }


module.exports = verifyUser;
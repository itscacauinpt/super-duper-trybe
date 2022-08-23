// unção sequelize.define()

const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
     // aqui inserimos o datatype da coluna criada
    phone_num: DataTypes.STRING,
  }, {
    // nome da tabela igual ao nome da model
    freezeTableName: true,
    // trocando o nome da table
    // tableName: "Xablau",
  });

  return User;
};

module.exports = User;

// OO - classes
// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     fullName: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };
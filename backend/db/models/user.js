const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order }) {
      User.Order = User.hasMany(Order, { foreignKey: 'idUser' });
    }
  }
  User.init({
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    name: DataTypes.TEXT,
    surname: DataTypes.TEXT,
    admin: DataTypes.BOOLEAN,
    phone: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

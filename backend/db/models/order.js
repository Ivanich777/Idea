const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, OrderItem }) {
      Order.User = Order.belongsTo(User, { foreignKey: 'idUser' });
      Order.OrderItem = Order.hasMany(OrderItem, { foreignKey: 'idOrder' });
    }
  }
  Order.init({
    idUser: DataTypes.INTEGER,
    status: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};

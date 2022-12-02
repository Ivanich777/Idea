const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    static associate({ Order, Product }) {
      OrderItem.Order = OrderItem.belongsTo(Order, { foreignKey: 'idOrder' });
      OrderItem.Product = OrderItem.belongsTo(Product, { foreignKey: 'idProduct' });
    }
  }
  OrderItem.init({
    idProduct: DataTypes.INTEGER,
    count: DataTypes.INTEGER,
    idOrder: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
  return OrderItem;
};

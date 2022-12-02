const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ OrderItem, Image, Category }) {
      Product.OrderItem = Product.hasMany(OrderItem, { foreignKey: 'idProduct' });
      Product.Image = Product.hasMany(Image, { foreignKey: 'idProduct' });
      Product.Category = Product.belongsTo(Category, { foreignKey: 'idCategory' });
    }
  }
  Product.init({
    article: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    count: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    idCategory: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'Products',
  });
  return Product;
};

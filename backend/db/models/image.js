const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate({ Product }) {
      Image.Product = Image.belongsTo(Product, { foreignKey: 'idProduct' });
    }
  }
  Image.init({
    idProduct: DataTypes.INTEGER,
    path: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};

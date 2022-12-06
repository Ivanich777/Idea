const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Feature extends Model {
    static associate({ Product }) {
      Feature.Product = Feature.belongsTo(Product, { foreignKey: 'idProduct' });
    }
  }
  Feature.init({
    idProduct: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Feature',
  });
  return Feature;
};

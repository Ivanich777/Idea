const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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

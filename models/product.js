'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Product.belongsTo(models.User, {
      //   foreignKey: 'UserId',
      //   onDelete: 'CASCADE'
      // });
      // Product.hasMany(models.Order, {
      //   foreignKey: 'ProductId',
      //   onDelete: 'CASCADE'
      // });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING,
    description: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    StoreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
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
      Product.belongsTo(models.Category);
      Product.belongsTo(models.Store, {
        onDelete: "CASCADE",
      });
      // Product.belongsTo(models.Order);
=======
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
            Product.belongsTo(models.Category);
            Product.belongsTo(models.Store, {
                onDelete: "CASCADE",
            });
            // Product.belongsTo(models.Order);
        }

        get price() {
          return new Intl.NumberFormat("id-ID", {
            style: "currency",
    
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(this.price);
        }
>>>>>>> 13c380c8dd580377080c931c5d162c4fd4d77c01
    }

    get price() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",

        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(this.price);
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      imgUrl: DataTypes.STRING,
      description: DataTypes.STRING,
      stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      CategoryId: DataTypes.INTEGER,
      StoreId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};

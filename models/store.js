"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Store extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // Store.hasMany(models.Product, {
            //   foreignKey: "StoreId",
            //   onDelete: "CASCADE",
            // });
            // Store.hasOne(models.User, {
            //   foreignKey: "StoreId",
            //   onDelete: "CASCADE",
            // });
            Store.hasMany(models.Product);
            Store.belongsTo(models.User, {
                onDelete: "CASCADE",
            });
        }
    }
    Store.init(
        {
            name: DataTypes.STRING,
            contact: DataTypes.STRING,
            address: DataTypes.STRING,
            description: DataTypes.STRING,
            imgUrl: DataTypes.STRING,
            UserId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Store",
        }
    );
    return Store;
};

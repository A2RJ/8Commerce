"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Order.belongsTo(models.User, {
      //   foreignKey: 'UserId',
      //   onDelete: 'CASCADE'
      // });
      // Order.belongsTo(models.Product, {
      //   foreignKey: 'ProductId',
      //   onDelete: 'CASCADE'
      // });
      Order.belongsTo(models.User);
      Order.belongsTo(models.Product);
    }

    static updateStatus(id, status) {
      return Order.update({ status: status }, { where: { id: id } });
    }
  }
  Order.init(
    {
      ProductId: {
        type: DataTypes.INTEGER,
        validate: { notEmpty: { msg: "ProductId Must not be Empty" } },
      },
      UserId: {
        type: DataTypes.INTEGER,
        validate: { notEmpty: { msg: "UserId Must not be Empty" } },
      },
      isFinished: {
        type: {
          type: DataTypes.BOOLEAN,
          validate: {
            notEmpty: { msg: "isFinished Must not be Empty" },
          },
        },
        defaultValue: false,
      },
      status: {
        type: {
          type: DataTypes.STRING,
          validate: { notEmpty: { msg: "status Must not be Empty" } },
        },
        defaultValue: "On Process",
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};

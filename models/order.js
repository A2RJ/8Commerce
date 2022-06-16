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
      ProductId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
      isFinished: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "On Process",
      },
    },
    {
      sequelize,
      modelName: "Order",
      hooks: {
        beforeCreate(order) {
          order.isFinished = false;
          order.status = "On Process";
        },
      },
    }
  );
  return Order;
};

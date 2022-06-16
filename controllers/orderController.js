const { Op } = require("sequelize");
const { User, Store, Product, Order } = require("../models");

class OrderController {
  static index(req, res) {
    Order.findAll({
      include: [User, Product],
    })
      .then((orders) => {
        res.send(orders);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static userOrders(req, res) {
    Order.findAll({
      where: {
        UserId: req.params.UserId,
      },
      include: [User, Product],
    })
      .then((orders) => {
        res.send(orders);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static sellerOrders(req, res) {
    Store.findOne({
      where: {
        UserId: req.params.UserId,
      },
      include: [Product],
    })
      .then((store) => {
        return Order.findAll({
          include: [User, Product],
          where: {
            ProductId: {
              [Op.in]: store.Products.map((product) => product.id),
            },
          },
        });
      })
      .then((orders) => {
        res.send(orders);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static order(req, res) {
    Order.create({
      UserId: req.params.UserId,
      ProductId: req.params.ProductId,
    })
      .then((order) => {
        res.send(order);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static cancel(req, res) {
    Order.updateStatus(req.params.OrderId, "Cancelled")
      .then((order) => {
        res.send(order);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static delivery(req, res) {
    Order.updateStatus(req.params.OrderId, "Delivered")
      .then((order) => {
        res.send(order);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static complete(req, res) {
    Order.updateStatus(req.params.OrderId, "Completed")
      .then((order) => {
        res.send(order);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = OrderController;

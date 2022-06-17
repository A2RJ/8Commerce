const { Product, Category, Store, User } = require("../models");
const { Op } = require("sequelize");

class ProductController {
  static index(req, res) {
    let params = {
      where: {
        StoreId: req.params.StoreId,
      },
    };

    if (req.query.search) {
      params.where = {
        name: {
          [Op.iLike]: `%${req.query.search}%`,
        },
      };
    }

    let products = [];

    Product.findAll(params)
      .then((productsList) => {
        products = productsList;
        return Store.findByPk(req.params.StoreId, {
          include: [User],
        });
      })
      .then((store) => {
        res.render("products/index", {
          products,
          store,
          session: req.session,
        });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static create(req, res) {
    Category.findAll()
      .then((categories) => {
        res.render("products/create", {
          categories,
          StoreId: req.params.StoreId,
          session: req.session,
        });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static show(req, res) {
    Product.findByPk(req.params.id, {
      include: [Category, Store],
    })
      .then((product) => {
        res.send(product);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static store(req, res) {
    Product.create({
      name: req.body.name,
      price: req.body.price,
      imgUrl: req.body.imgUrl,
      description: req.body.description,
      stock: req.body.stock,
      CategoryId: req.body.CategoryId,
      StoreId: req.params.StoreId,
    })
      .then((product) => {
        res.redirect(`/products/${product.StoreId}/store`);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static edit(req, res) {
    let categories = [];
    Category.findAll()
      .then((categoriesRes) => {
        categories = categoriesRes;
        return Product.findByPk(req.params.ProductId, {
          include: [Category],
        });
      })
      .then((product) => {
        res.render("products/edit", {
          product,
          categories,
          StoreId: req.params.StoreId,
          session: req.session,
        });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static update(req, res) {
    Product.update(
      {
        name: req.body.name,
        price: req.body.price,
        imgUrl: req.body.imgUrl,
        description: req.body.description,
        stock: req.body.stock,
        CategoryId: req.body.CategoryId,
      },
      {
        where: {
          id: req.params.ProductId,
        },
      }
    )
      .then((product) => {
        res.redirect(`/products/${req.body.StoreId}/store`);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static destroy(req, res) {
    let StoreId = "";
    Product.findByPk(req.params.ProductId)
      .then((product) => {
        StoreId = product.StoreId;
        return Product.destroy({
          where: {
            id: req.params.ProductId,
          },
        });
      })
      .then(() => {
        res.redirect(`/products/${StoreId}/store`);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = ProductController;

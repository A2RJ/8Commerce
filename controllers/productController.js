const { Product, Category, Store } = require("../models");

class ProductController {
  static index(req, res) {
    let params = {
      include: [Category, Store],
    };

    if (req.query.name) {
      params.where = {
        name: {
          [Op.iLike]: `%${req.query.name}%`,
        },
      };
    }

    Product.findAll(params)
      .then((products) => {
        // res.render("/products/index");
        res.send(products);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static create(req, res) {
    res.render("/products/create");
  }

  static show(req, res) {
    Product.findByPk(req.params.id, {
      include: [Category, Store],
    })
      .then((product) => {
        // res.render("/products/show");
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
      StoreId: req.body.StoreId,
    })
      .then((product) => {
        res.send(product);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static edit(req, res) {
    let stores = [];
    let categories = [];
    Store.findAll()
      .then((stores) => {
        stores = stores;
        return Category.findAll();
      })
      .then((categories) => {
        categories = categories;
        return Product.findByPk(req.params.id, {
          include: [Category, Store],
        });
      })
      .then((product) => {
        res.render("/products/edit", {
          product,
          stores,
          categories,
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
        StoreId: req.body.StoreId,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((product) => {
        res.send(product);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static destroy(req, res) {
    Product.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((product) => {
        res.send(product);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = ProductController;

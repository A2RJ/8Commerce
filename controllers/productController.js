const { User, Store, Product } = require("../models");

class ProductController {
    static getProductById(req, res) {
        Product.findOne({ where: { id: req.params.id } })
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                res.send(err);
            });
    }

    static addForm(req, res) {
        Category.findAll()
            .then((data) => {
                res.render("addProduct", { data });
            })
            .catch((err) => {
                res.send(err);
            });
    }
}

module.exports = ProductController;

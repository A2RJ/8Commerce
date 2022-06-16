const productRoutes = require("express").Router();
const ProductController = require("../controllers/ProductController");

productRoutes.get("/:StoreId/store", ProductController.index);
productRoutes.get("/:StoreId/create", ProductController.create);
productRoutes.get("/:id", ProductController.show);
productRoutes.post("/:StoreId/store", ProductController.store);
productRoutes.get("/:ProductId/edit", ProductController.edit);
productRoutes.post("/:ProductId/update", ProductController.update);
productRoutes.get("/:ProductId/delete", ProductController.destroy);

module.exports = productRoutes;

const productRoutes = require("express").Router();
const ProductController = require("../controllers/ProductController");

productRoutes.get("/", ProductController.index);
productRoutes.get("/create", ProductController.create);
productRoutes.get("/:id", ProductController.show);
productRoutes.post("/", ProductController.store);
productRoutes.get("/:id/edit", ProductController.edit);
productRoutes.put("/:id", ProductController.update);
productRoutes.delete("/:id", ProductController.destroy);

module.exports = productRoutes;

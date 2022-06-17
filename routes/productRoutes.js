const router = require("express").Router();
const ProductController = require("../controllers/ProductController");

const validator = require("../middleware/validator");

router.get(
    "/add",
    validator("checkHasLogin"),
    validator("checkHasStore"),
    ProductController.addForm
);
router.get("/:id", ProductController.getProductById);

// router.post(
//     "/add",
//     validator("checkHasLogin"),
//     validator("checkHasStore"),
//     ProductController.add
// );
// router.get(
//     "/edit",
//     validator("checkHasLogin"),
//     validator("checkHasStore"),
//     ProductController.editForm
// );
// router.post(
//     "/edit",
//     validator("checkHasLogin"),
//     validator("checkHasStore"),
//     ProductController.edit
// );

// router.get(
//     "/delete",
//     validator("checkHasLogin"),
//     validator("checkHasStore"),
//     ProductController.delete
// );

module.exports = router;

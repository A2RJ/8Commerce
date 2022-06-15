const router = require("express").Router();
const UserController = require("../controllers/UserController");

router.get("/register", UserController.registerForm);
router.post("/register", UserController.register);

module.exports = router;

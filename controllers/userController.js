const { User } = require("../models");

class UserController {
    static registerForm(req, res) {
        res.render("registerForm");
    }

    static register(req, res) {
        User.create(req.body)
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                res.send(err);
            });
    }

    static login(req, res) {
        User.create(req.body)
            .then((data) => {
                res.send(data);
            })
            .catch((err) => {
                res.send(err);
            });
    }
}

module.exports = UserController;

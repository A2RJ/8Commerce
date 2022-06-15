"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // User.hasOne(models.Store, {
            //   foreignKey: "UserId",
            //   onDelete: "CASCADE",
            // });
            User.hasOne(models.Store);
            User.hasMany(models.Order);
        }
    }
    User.init(
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "User",
        }
    );

    User.addHook("beforeCreate", "hash Password", (value) => {
        const salt = bcrypt.genSaltSync(8);
        value.password = bcrypt.hashSync(value.password, salt);
        console.log(value);
    });

    return User;
};

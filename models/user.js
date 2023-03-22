"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Resource, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      User.hasMany(models.Comment,{
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      User.belongsToMany(models.Resource, {
        as: 'favorite_list',
        through: models.Favorite,
        foreignKey: 'user_id'
      })
      User.hasMany(models.Favorite)

      // define association here
    }
  }
  User.init(
    {
      username: {
        allowNull: false,
        // unique: true,
        type: DataTypes.STRING,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true,
        validate: {
          isEmail: true,
        },
      },

      password_digest: {
        allowNull: false,
        type: DataTypes.STRING
      },

    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};

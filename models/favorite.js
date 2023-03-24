"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate(models) {
      Favorite.belongsTo(models.User, { foreignKey: "user_id" });
      Favorite.belongsTo(models.Resource, { foreignKey: "resource_id" });
    }
  }
  Favorite.init(
    {
      user_id: {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        type: DataTypes.INTEGER,
        reference: {
          model: "users",
          key: "id",
        },
      },
      resource_id: {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        type: DataTypes.INTEGER,
        reference: {
          model: "resources",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Favorite",
      tableName: "favorites",
    }
  );
  return Favorite;
};

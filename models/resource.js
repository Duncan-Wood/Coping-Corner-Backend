"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Resource extends Model {
    static associate(models) {
      Resource.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Resource.hasMany(models.Comment, {
        foreignKey: "resource_id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Resource.belongsToMany(models.User, {
        as: "favorite_item",
        through: models.Favorite,
        foreignKey: "resource_id",
      });
    }
  }
  Resource.init(
    {
      user_id: {
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        type: DataTypes.INTEGER,
        reference: {
          model: "users",
          key: "id",
        },
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      type: {
        allowNull: false,
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      feeling: {
        allowNull: false,
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      time_requirement: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      preview_text: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      likes: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
      },
      optional_image: {
        type: DataTypes.STRING,
      },
      optional_link: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Resource",
      tableName: "resources",
    }
  );
  return Resource;
};

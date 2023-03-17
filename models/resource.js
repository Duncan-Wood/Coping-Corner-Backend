"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Resource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Resource.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Resource.hasMany(models.Comment, {
        foreignKey: 'resource_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Resource.belongsToMany(models.User, {
        as: 'favorite_item',
        through: models.Favorite,
        foreignKey: 'resource_id'
      })
      // define association here
    }
  }
  Resource.init(
    {
      user_id: {
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        type: Sequelize.INTEGER,
        reference: {
          model: "users",
          key: "id",
        },
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      feeling: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      time_requirement: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      preview_text: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      likes: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      optional_link: {
        type: Sequelize.STRING,
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

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
        type: DataTypes.STRING,
      },
      feeling: {
        allowNull: false,
        type: DataTypes.STRING,
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

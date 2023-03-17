"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Comment.belongsTo(models.Resource, {
        foreignKey: 'resource_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      // define association here
    }
  }
  Comment.init(
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
      resource_id: {
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        type: DataTypes.INTEGER,
        reference: {
          model: "resources",
          key: "id",
        },
      },
      comment_text: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "Comment",
      tableName: "comments",
    }
  );
  return Comment;
};

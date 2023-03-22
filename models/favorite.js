'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Favorite.belongsTo(models.User, { foreignKey: 'user_id' })
      Favorite.belongsTo(models.Resource, { foreignKey: 'resource_id' })
      
    }
  }
  Favorite.init({
    userId: {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      type: DataTypes.INTEGER,
      reference: {
        model: "users",
        key: "id",
      },
    },
    ResourceId: {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      type: DataTypes.INTEGER,
      reference: {
        model: "resources",
        key: "id",
      },
      
    },
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
  }, {
    sequelize,
    modelName: 'Favorite',
    tableName: 'favorites'
  });
  return Favorite;
};


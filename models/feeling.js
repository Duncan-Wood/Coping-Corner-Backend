'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feeling extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Feeling.belongsToMany(models.Resource, {
        as: 'feeling_tag',
        through: models.Resource_Feeling,
        foreignKey: 'feeling_id'
      })
      
    }
  }
  Feeling.init({
    name: DataTypes.STRING,
    resource_id:{
      allowNull: false,
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      type: DataTypes.INTEGER,
      reference: {
        model: "resources",
        key: "id",
    },
  }}
  , {
    sequelize,
    modelName: 'Feeling',
    tableName: 'feelings'
  });
  return Feeling;
};
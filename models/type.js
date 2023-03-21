'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Type.belongsToMany(models.Resource, {
          as: 'type_tag',
          through: models.Resource_Type,
          foreignKey: 'type_id'
        })
    }
  }
  Type.init({
    name: DataTypes.STRING,
    resource_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Type',
    tableName: 'types'
  });
  return Type;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resource_Feeling extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Resource_Feeling.init({
    feeling_id: DataTypes.INTEGER,
    resource_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Resource_Feeling',
    tableName: 'resource_feelings'
  });
  return Resource_Feeling;
};
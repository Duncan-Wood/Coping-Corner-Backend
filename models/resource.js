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
      type_meditation: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      type_movement: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      type_mind_body: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      type_distraction: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      type_grounding: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      type_affirmation: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_angry: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_blah: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_fine: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_bad: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_afraid: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_overwhelmed: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_under_stimulated: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_calm: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_lonely: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_guilty: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_disconnected: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_tired: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_good: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_sad: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_self_doubt: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_depressed: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_frustrated: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_happy: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_totally_distraught: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      feeling_extremely_irritable: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
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

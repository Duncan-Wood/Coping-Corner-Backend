'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('resources', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull:false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        type: Sequelize.INTEGER,
        reference: {
          model: "users",
          key: "id"
        }
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      type_meditation: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      type_movement: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      type_mind_body: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      type_distraction: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      type_grounding: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      type_affirmation: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_angry: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_blah: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_fine: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_bad: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_afraid: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_overwhelmed: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_under_stimulated: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_calm: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_lonely: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_guilty: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_disconnected: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_tired: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_good: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_sad: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_self_doubt: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_depressed: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_frustrated: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_happy: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_totally_distraught: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      feeling_extremely_irritable: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      time_requirement: {
        allowNull: false,
        type: Sequelize.STRING
      },
      preview_text: {
        allowNull: false,
        type: Sequelize.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      likes: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      optional_image: {
        type: Sequelize.STRING
      },
      optional_link: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('resources');
  }
};
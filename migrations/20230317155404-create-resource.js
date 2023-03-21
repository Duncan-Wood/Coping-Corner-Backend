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
        }},
        title: {
          allowNull: false,
          type: Sequelize.STRING
        },
        type: {
          allowNull: false,
          type: Sequelize.ARRAY (Sequelize.STRING),
          defaultValue: [],
        },
        feeling: {
          allowNull: false,
          type: Sequelize.ARRAY (Sequelize.STRING),
          defaultValue: [],
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
  }}

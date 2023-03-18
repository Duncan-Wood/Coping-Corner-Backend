'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',[
      {
        username: "ykallday",
        email: "yael@yael.com",
        password_digest: "iamsotired123",
        current_mood: "overwhelmed",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "elliottv26",
        email: "elliott@elliott.com",
        password_digest: "fake123",
        current_mood: "tired",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "qlandry",
        email: "quinn@quinn.com",
        password_digest: "swol123",
        current_mood: "bored",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "gamer",
        email: "duncan@duncan.com",
        password_digest: "kitty",
        current_mood: "in pain",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users')
  }
};

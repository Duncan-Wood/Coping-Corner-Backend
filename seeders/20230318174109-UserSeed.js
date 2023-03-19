'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',[
      {
        username:"ccadmin",
        email:"fake@copingcorner.com",
        password_digest:"keepcalmcarryon",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "ykallday",
        email: "yael@yael.com",
        password_digest: "iamsotired123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "elliottv26",
        email: "elliott@elliott.com",
        password_digest: "fake123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "qlandry",
        email: "quinn@quinn.com",
        password_digest: "swol123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "gamer",
        email: "duncan@duncan.com",
        password_digest: "kitty",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users')
  }
};

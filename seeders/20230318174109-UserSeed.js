'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',[
      {
        username:"ccadmin",
        email:"fake@copingcorner.com",
        password_digest:"$2b$12$rWewyFqndSUuV/vuVa.AMemIgPEOsk5zMKYaM23fluK.4Ct5nfgly",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "ykallday",
        email: "yael@yael.com",
        password_digest: "$2b$12$h54YRxwFuOSF250uNnGaFOl1ThofgnuXy.dIQlEINSUJNfd7IbGNe",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "elliottv26",
        email: "elliott@elliott.com",
        password_digest: "$2b$12$oyy1MP3t0A6A/2mMyDSd8e16dKonq9q4lPeA6Hoq6EupylJ2mjYrW",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "qlandry",
        email: "quinn@quinn.com",
        password_digest: "$2b$12$a531ZsRoSp9syJyXCe..WeR2DwQAoC4lFSCfRJbtHLIuOXn9KUxdu",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "gamer",
        email: "duncan@duncan.com",
        password_digest: "$2b$12$EIBq.fzuiSu3bE9NREmjTu/I13qz/5kX4GZWUWRWS1irpU6YZg8gW ",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users')
  }
};

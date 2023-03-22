'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',[
      {
        username:"ccadmin",
        email:"fake@copingcorner.com",
        password_digest:"$2b$12$p8CluHrYytKsAkSjhXqAc.qGjFeNd5ZBtRXkV3Gygk.XsKhWnh5T6",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "ykallday",
        email: "yael@yael.com",
        password_digest: "$2b$12$cqN5Hlmzq8qrW6MFtxma1uc.bhCqtuL4j0J2Pwo9eBo0z.V.0tCyS",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "elliottv26",
        email: "elliott@elliott.com",
        password_digest: "$2b$12$uSft9RB2KygLuVzzuKV1POAj.holjBtiBBMYWszR79mQz.p37FPji",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "qlandry",
        email: "quinn@quinn.com",
        password_digest: "$2b$12$xL3T5vhEPch7NeOVwN/UgOXP.1JVNliPQgVE2fbxYHT/ZrMh1d26m",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "gamer",
        email: "duncan@duncan.com",
        password_digest: "$2b$12$oWvPMgpa63TbZ2GjhdYeFuYMJKy.UmaYOE.Ua2QLrFan1pvwkKsdu",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users')
  }
};

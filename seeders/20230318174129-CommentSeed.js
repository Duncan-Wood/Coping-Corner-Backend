'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comments',[
    {
      user_id: 1,
      resource_id: 2,
      comment_text: "Love this Elliott! Great idea.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      resource_id: 4,
      comment_text: "I really need to start doing yoga again!!!",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      resource_id: 5,
      comment_text: "Man, nature's so great. Thanks for this.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      resource_id: 2,
      comment_text: "I love deep-breathing. A+ suggestion.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 4,
      resource_id: 3,
      comment_text: "I don't want to do this. I hate jumping jacks.",
      createdAt: new Date(),
      updatedAt: new Date()
    },

    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments')
  }
};

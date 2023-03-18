'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('resources',[
      {
        user_id: 1,
        title: "Feel Empowered Affirmation",
        type: "Affirmation" ,
        feeling: "Self-Doubt" ,
        time_requirement: "5 minutes" ,
        preview_text: "Need a boost?" ,
        content: "Take a deep breath, look yourself in the mirror and say: I AM AWESOME",
        likes: 4 ,
        optional_link: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        title: "Box Breathing",
        type: "Meditation" ,
        feeling: "Overwhelmed",
        time_requirement: "10 minutes" ,
        preview_text: "A breathing exercise for when you're feeling overwhelmed.",
        content: "Breathe in for 4 seconds, hold for 4 seconds, breathe out for 4 seconds, hold for 4 seconds and repeat!",
        likes: 10,
        optional_link: "https://www.boxbreathing.com" ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        title: "Get Un-frozen",
        type: "Movement" ,
        feeling: "depressed" ,
        time_requirement: "3 minutes",
        preview_text:"Shake it off!",
        content: "Do 30 jumping jacks and don't cry about it." ,
        likes: 0 ,
        optional_link: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 4,
        title: "Sun Salutation" ,
        type:"Movement" ,
        feeling:"anxious" ,
        time_requirement: "5 minutes" ,
        preview_text: "Reconnect with your body." ,
        content: "Traditional yoga flows meet mindfullness in this mind-body-connecting technique. BLAH BLAH BLAH." ,
        likes: 8,
        optional_link: "http://www.yoga.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id:3 ,
        title: "Take a Walk",
        type: "Movement" ,
        feeling:"Overwhelmed",
        time_requirement: "15 minutes" ,
        preview_text: "Get out of your current environment",
        content: "Take a walk outside and something something something, it'll do your mind something something." ,
        likes: 6 ,
        optional_link: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('resources')
  }
};

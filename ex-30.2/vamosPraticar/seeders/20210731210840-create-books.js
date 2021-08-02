'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Books',[
      {
        title:"a morte da bizerra",
        author:"carlor luiz",
        pageQuantity: '123',
      },
      {
        title:"a morte da bizerra",
        author:"carlor luiz",
        pageQuantity: '123',
      }
    ]);
   },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Books",null,{});
  }
};

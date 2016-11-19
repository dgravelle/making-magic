'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Decks', [{
        user_id: 1,
        title: 'test deck',
        format: 'commander',
        description: 'just a sample deck',
        colors: ['g','w'],
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Decks', null, {});
  }
};

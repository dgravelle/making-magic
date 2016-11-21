'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Decks', [{
        title: 'test deck',
        format: 'EDH',
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

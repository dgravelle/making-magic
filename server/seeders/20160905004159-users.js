'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Users', [
        {
            email: 'sample@user.com',username: 'Timmy',
            createdAt: new Date(),
            updatedAt: new Date()
        }
      ], {});

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

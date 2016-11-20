'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        username: {
            type: Sequelize.STRING,
            unique: true
        },
        email: {
            type: Sequelize.STRING
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};

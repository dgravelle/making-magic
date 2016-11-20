'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Decks', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
          references: {
                model: 'Users',
                key: 'id'
            },
            onUpdate: 'cascade',
            onDelete: 'cascade',
            type: Sequelize.INTEGER
      },
      title: {
          allowNull: false,
          type: Sequelize.STRING
      },
      format: {
          allowNull: false,
          type: Sequelize.STRING
      },
      description: {
          type: Sequelize.STRING
      },
      colors: {
          type: Sequelize.ARRAY(Sequelize.TEXT)
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('decks');
  }
};

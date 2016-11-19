'use strict';

module.exports = function(sequelize, DataTypes) {
    var Decks = sequelize.define('Decks', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        format: DataTypes.STRING,
        description: DataTypes.STRING,
        colors: DataTypes.ARRAY(DataTypes.STRING),
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        associate: models => {
            Decks.belongsTo(models.User, {
                onDelete: 'CASCADE',
                foreignKey: {
                    allowNull: false
                }
            });
        }
    });

    return Decks;
};

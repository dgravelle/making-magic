'use strict';

module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        classMethods: {
            associate: models => {
                User.hasMany(models.Deck)
            }
        }
    });

    return User;
}

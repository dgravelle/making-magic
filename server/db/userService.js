module.exports = (sequelize) => {
    var models = require('../models')
    var User = models.User;
    return {
        create: (req, res) => {
            var newUser = {
                email: req.email
            }
            User.build(newUser)
                .save()
                .then(() => {
                    res.send(200)
                })
        },
        getAll: (req, res) => {
            User.findAll().then(users => {
                res.send(users);
            })
        }
    }

}

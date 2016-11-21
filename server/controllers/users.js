var user = require('../models').User;

module.exports = {
    index(req, res) {
        User.findAll().then(users => {
            return res.status(200).json(users);
        })
        .catch(err => {
            return res(500).json(err);
        });
    },
    show(req, res) {
        User.findByIndex(req.params.id).then(user => {
            return res.status(200).json(user);
        })
        .catch(err => {
            return res.status(200).json(err);
        });
    },
    create(req, res) {
        User.create(req.body).then(user => {
            return res.status(200).json(user);
        })
        .catch(err => {
            return res.status(200).json(err);
        });
    },
    update(req, res) {
        User.update(req.body, { where: { id : req.params.id }}).then(user => {
            return res.status(200).json(user);
        })
        .catch(err => {
            return res.status(200).json(err);
        });
    },
    delete(req, res) {
        User.destroy(req.body, { where: { id : req.params.id }}).then(user => {
            return res.status(200).json(user);
        })
        .catch(err => {
            return res.status(200).json(err);
        });
    }

}

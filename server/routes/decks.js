const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/:id', (req, res, next) => {
    var id = req.params.id;

    models.User.find({ 
        where: {
            'id': id
        }
    })
    .then(decks => {
        res.json(decks.dataValues);
    })
    .catch(err => {
        err.status = 409
        res.status(409)
        res.json(err);
    });

})

module.exports = router;

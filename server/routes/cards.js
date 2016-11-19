const express = require('express');
const router = express.Router();
const AllCards = require('../AllCards/AllCards.json');
const _ = require('lodash');
const cards = Object.keys(AllCards)

router.get('/gw', (req, res) => {

    var results = [];
    _.forEach(AllCards, (value, key) => {
        if(value.hasOwnProperty('colors') && value.colors.length <= 2) {
            if (!_.includes(value.colors, 'Black') && !_.includes(value.colors, 'Blue') && !_.includes(value.colors, 'Red')) {
                results.push(value);
            }
        }
    });


    res.json(results);


})

module.exports = router;

const express = require('express');
const users = require('../models').User;

module.exports = router => {
    router.get('/users', users.index);
    router.get('/users/:id', users.show);
    router.post('/users', users.create);
    router.put('/users', users.update);

    // router.get('/decks', decks.index);
    // router.get('/decks/:id', decks.show);
    // router.post('/decks', decks.create);
    // router.put('/decks', decks.update);
};

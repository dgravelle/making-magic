const express = require('express');
const router = express.Router();
const users = require('./users');
const decks = require('./decks');
const cards = require('./cards');

router.use('/users', users);
router.use('/decks', decks);
router.use('/cards', cards);

module.exports = router;

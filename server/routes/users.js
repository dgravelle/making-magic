const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('in');
    res.send('one minute');
});

router.get('/:id', (req, res, next) => {
    console.log(req.params.id);
    res.send('one minute');
});

module.exports = router;

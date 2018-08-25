const router = require('express').Router();
const tirescontrol = require('./tirescontrol');
const testcontrol = require('./testcontrol');

router.use('/tires', tirescontrol);

router.use('/test', testcontrol);

module.exports = router;
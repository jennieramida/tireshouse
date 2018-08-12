const router = require('express').Router();
const tirescontrol = require('./tirescontrol');
const ordercontrol = require('./ordercontrol');

router.use('/tires',tirescontrol);

router.use('/order',ordercontrol);

module.exports = router;
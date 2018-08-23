const router = require('express').Router();
const ordercontrol = require('./ordercontrol');
const profilecontrol = require('./profilecontrol');

router.use('/order', ordercontrol);

router.use('/profile', profilecontrol);

module.exports = router;
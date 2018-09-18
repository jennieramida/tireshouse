const router = require('express').Router();
const tirescontrol = require('./tirescontrol');
const ordercontrol = require('./ordercontrol');
const storecontrol = require('./storecontrol');
const profilecontrol = require('./profilecontrol');
const filecontrol = require('./filecontrol');

router.use('/tires', tirescontrol);

router.use('/order', ordercontrol);

router.use('/store', storecontrol);

router.use('/profile', profilecontrol);

router.use('/file', filecontrol);

module.exports = router;
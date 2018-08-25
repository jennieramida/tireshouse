const router = require('express').Router();
// const tirescontrol = require('./tirescontrol');
const ordercontrol = require('./ordercontrol');
// const storecontrol = require('./storecontrol');
const profilecontrol = require('./profilecontrol');

// router.use('/tires', tirescontrol);

router.use('/order', ordercontrol);

router.use('/profile', profilecontrol);

module.exports = router;
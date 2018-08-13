const router = require('express').Router();
const tirescontrol = require('./tirescontrol');
const ordercontrol = require('./ordercontrol');
const storecontrol = require('./storecontrol');

router.use('/tires', tirescontrol);

router.use('/order', ordercontrol);

router.use('/store', storecontrol)

module.exports = router;
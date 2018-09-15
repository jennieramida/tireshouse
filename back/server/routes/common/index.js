const router = require('express').Router();
const tirescontrol = require('./tirescontrol');
const zonecontrol = require('./zonecontrol');
const testcontrol = require('./testcontrol');
const externalcontrol = require('./externalcontrol')
const smscontrol = require('./smscontrol');

router.use('/tires', tirescontrol);

router.use('/test', testcontrol);

router.use('/zone', zonecontrol)

router.use('/sms', smscontrol);

router.use('/external', externalcontrol)

module.exports = router;
const router = require('express').Router();
const tirescontrol = require('./tirescontrol');
const zonecontrol = require('./zonecontrol');
const testcontrol = require('./testcontrol');

router.use('/tires', tirescontrol);

router.use('/test', testcontrol);

router.use('/zone', zonecontrol)
module.exports = router;
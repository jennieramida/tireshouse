const router = require('express').Router();
const tirescontrol = require('./tirescontrol');

router.use('/tires', tirescontrol);

module.exports = router;
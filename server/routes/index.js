const router = require('express').Router();
const passport = require('passport');
const path = require('path');
const auth = require('./auth');
const api = require('./api');
const common = require('./common');
const customer = require('./customer');
const technician = require('./technician');
const staff = require('./staff')


router.use('/auth', auth);
router.use('/common', common);
router.use('/customer', passport.authenticate('jwtcust', { session: false }), customer);
router.use('/technician', passport.authenticate('jwttech', { session: false }), technician);
router.use('/staff', passport.authenticate('jwttech', { session: false }), staff);

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', 'dist', 'index.html'));
});

module.exports = router;
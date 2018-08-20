const router = require('express').Router();
const passport = require('passport');
const path = require('path');
const auth = require('./auth');
const api = require('./api');
const common = require('./common');


router.use('/auth', auth);
router.use('/common', common);
router.use('/customerapi', passport.authenticate('jwtcust', { session: false }), api);
router.use('/technicianapi', passport.authenticate('jwttech', { session: false }), api);

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', 'dist', 'index.html'));
});

module.exports = router;
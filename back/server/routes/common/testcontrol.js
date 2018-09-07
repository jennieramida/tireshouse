const router = require('express').Router();
const SmsController = require('../../controllers/SmsController');

router.get('/sms', SmsController.smsCallResposne);
router.get('/OTP', SmsController.smsOTPHandler);
router.get('/map', SmsController.mapTest);
module.exports = router;
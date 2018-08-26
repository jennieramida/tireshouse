const router = require('express').Router();
const SmsController = require('../../controllers/SmsController');

router.get('/sms', SmsController.smsCallResposne);
router.get('/OTP', SmsController.smsOTPHandler);

module.exports = router;
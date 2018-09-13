const router = require('express').Router();
const SmsController = require('../../controllers/SmsController');

router.post('/otpcheck', SmsController.smsCallResposne);

router.post('/smsresend', SmsController.smsOTPResend);

router.post('/smssend', SmsController.smsOTPHandler);

router.get('/', SmsController.getOTPAll);

router.get('/xml', SmsController.getXMLTest);

module.exports = router;
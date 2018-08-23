const router = require('express').Router();
const UserController = require('../../controllers/UserController');

router.get('/customer', UserController.getProfileCustomer); 

router.put('/customer', UserController.updateProfileCustomer);

router.put('/customer/password', UserController.changePasswordCustomer);

module.exports = router;

const router = require('express').Router();
const UserController = require('../../controllers/UserController');

router.get('/customer', UserController.getProfileCustomer);

router.get('/technician', UserController.getProfileTechnician);

router.put('/customer', UserController.updateProfileCustomer);

router.put('/technician', UserController.updateProfileTechnician);

router.put('/customer/password', UserController.changePasswordCustomer);

router.put('/technician/password', UserController.changePasswordTechnician);

module.exports = router;
// router.get('/info', OrderController.info);

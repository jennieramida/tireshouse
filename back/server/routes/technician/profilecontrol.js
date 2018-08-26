const router = require('express').Router();
const UserController = require('../../controllers/UserController');

router.get('/technician', UserController.getProfileTechnician);

router.put('/technician', UserController.updateProfileTechnician);

router.put('/technician/password', UserController.changePasswordTechnician);

module.exports = router;

                            
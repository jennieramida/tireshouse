const router = require('express').Router();
const ZoneController = require('../../controllers/ZoneController');

router.get('/district', ZoneController.getZone);



module.exports = router;
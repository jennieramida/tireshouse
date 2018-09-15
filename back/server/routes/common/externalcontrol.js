const router = require('express').Router();
const ExternalApiController = require('../../controllers/ExternalApiController');

router.get('/map', ExternalApiController.mapNearPlaceApi);

module.exports = router;
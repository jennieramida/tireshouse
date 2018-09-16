const router = require('express').Router();
const ExternalApiController = require('../../controllers/ExternalApiController');

router.get('/map', ExternalApiController.mapNearPlaceApi);

router.get('/geocode', ExternalApiController.mapGeocode);

module.exports = router;
const router = require('express').Router();
const ExternalApiController = require('../../controllers/ExternalApiController');

router.get('/', ExternalApiController.mapNearPlaceApi);

module.exports = router;
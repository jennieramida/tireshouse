const router = require('express').Router();
const TiresController = require('../../controllers/TiresController');

router.get('/search', TiresController.search);

router.get('/info', TiresController.info);

// router.get('/info', TiresController.info);
module.exports = router;
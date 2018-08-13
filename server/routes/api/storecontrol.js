const router = require('express').Router();
const StoreController = require('../../controllers/StoreController');

router.post('/staff', StoreController.insertStore);
router.get('/staff', StoreController.getStore);
router.put('/staff', StoreController.updateStore);
router.delete('/staff', StoreController.deleteStore);

module.exports = router;

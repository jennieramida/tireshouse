const router = require('express').Router();
const StoreController = require('../../controllers/StoreController');
const ZoneController = require('../../controllers/ZoneController');
const TiresController = require('../../controllers/TiresController');

router.get('/staff', StoreController.getStore);

router.post('/staff', StoreController.insertStore);

router.post('/staffdetail',StoreController.getStoreById);

router.put('/staff', StoreController.updateStore);

router.delete('/staff', StoreController.deleteStore);

router.get('/zone', ZoneController.getZone);

router.post('/zone', ZoneController.insertZone);

router.put('/zone', ZoneController.updateZone);

router.delete('/zone', ZoneController.deleteZone);

router.get('/tire', TiresController.getTire);

router.post('/tiredetail', TiresController.getTireById);

router.post('/tire', TiresController.insertTire);

router.put('/tire', TiresController.updateTire);

router.delete('/tire', TiresController.deleteTire);

module.exports = router;

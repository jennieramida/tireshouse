const router = require('express').Router();
const OrderController = require('../../controllers/OrderController');

router.post('/add', OrderController.add);

module.exports = router;
// router.get('/info', OrderController.info);

const router = require('express').Router();
const OrderController = require('../../controllers/OrderController');

router.post('/create', OrderController.createOrder);

router.put('/cancel', OrderController.cancelOrder);

module.exports = router;

const router = require('express').Router();
const OrderController = require('../../controllers/OrderController');

router.post('/create', OrderController.createOrder);

module.exports = router;
// router.get('/info', OrderController.info);

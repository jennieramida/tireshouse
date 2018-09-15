const router = require('express').Router();
const OrderController = require('../../controllers/OrderController');

router.post('/create', OrderController.createOrder);

router.put('/cancel', OrderController.cancelOrder);

router.post('/getorderdetail', OrderController.getOrderWithDeatil);

router.get('/',OrderController.getCustomerOrderHistory);

module.exports = router;

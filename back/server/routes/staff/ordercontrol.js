const router = require('express').Router();
const OrderController = require('../../controllers/OrderController');

router.post('/create', OrderController.createOrder);

router.post('/getorderdetail', OrderController.getOrderWithDeatil);

module.exports = router;
// router.get('/info', OrderController.info);

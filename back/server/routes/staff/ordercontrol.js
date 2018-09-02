const router = require('express').Router();
const OrderController = require('../../controllers/OrderController');

router.post('/create', OrderController.createOrder);

router.post('/getorderdetail', OrderController.getOrderWithDeatil);

router.get('/getorder', OrderController.getOrder);

module.exports = router;
// router.get('/info', OrderController.info);

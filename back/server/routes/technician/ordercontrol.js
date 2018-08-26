const router = require('express').Router();
const OrderController = require('../../controllers/OrderController');

// router.post('/create', OrderController.createOrder);

router.put('/update/technician', OrderController.updateOrderProgressByTechnician)

router.get('/job',OrderController.getOrderByZone);
// router.put('/order/job', )

module.exports = router;

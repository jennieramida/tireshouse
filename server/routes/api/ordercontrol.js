const router = require('express').Router();
const OrderController = require('../../controllers/OrderController');

router.post('/search', OrderController.add);

// router.get('/info', OrderController.info);

const router = require('express').Router();
const OrderController = require('../../controllers/OrderController');

router.post('/orders/add', OrderController.add);


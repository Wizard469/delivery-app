const { Router } = require('express');
const controller = require('../controller/sales-controller');
const checkoutController = require('../controller/checkout-controller');
const authMiddleware = require('../middlewares/auth-middleware');

const router = Router();

// router.post('/', controller.newSale);

router.get('/orders/:sellerId', controller.getAll);

router.get('/:id', controller.saleId);

router.post('/', authMiddleware, checkoutController.addSale);

module.exports = router;
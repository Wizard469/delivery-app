const { Router } = require('express');
const controller = require('../controller/sales-controller');
const checkoutController = require('../controller/checkout-controller');
const authMiddleware = require('../middlewares/auth-middleware');

const router = Router();

// router.post('/', controller.newSale);

router.get('/customer/:userId', controller.getAllByUserId);
router.get('/orders/:sellerId', controller.getAll);
router.put('/orders/:saleId', controller.updateStatus);
router.get('/:id', controller.getById);
router.post('/', authMiddleware, checkoutController.addSale);

module.exports = router;
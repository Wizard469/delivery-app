const { Router } = require('express');
const controller = require('../controller/sales-controller');

const router = Router();

// router.post('/', sales.newSale);

router.get('/', controller.getAll);

// router.get('/seller/orders', sales.sales);

// router.get('/:id', salesById);

module.exports = router;
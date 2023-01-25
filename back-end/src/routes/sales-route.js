const { Router } = require('express');
const controller = require('../controller/sales-controller');

const router = Router();

// router.post('/', controller.newSale);

router.get('/', controller.getAll);

router.get('/:id', controller.saleId);

module.exports = router;
const { Router } = require('express');
const { sales } = require('../controller/sales-controller');

const router = Router();

router.post('/', sales.newSale);

router.get('/', sales.sales);

router.get('/:id', salesById);

module.exports = router;
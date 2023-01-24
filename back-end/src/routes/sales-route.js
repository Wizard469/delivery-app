const { Router } = require('express');
const { sales } = require('../controller/sales-controller');

const router = Router();

router.get('/', sales.sales);

module.exports = router;
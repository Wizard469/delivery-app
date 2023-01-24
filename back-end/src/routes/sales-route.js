const { Router } = require('express');

const router = Router();

router.get('/', salesController.sales);

module.exports = router;
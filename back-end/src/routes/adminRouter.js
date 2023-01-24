const { Router } = require('express');
const adminController = require('../controller/admin-controller');

const router = Router();

router.post('/', adminController.createNewUser);

module.exports = router;
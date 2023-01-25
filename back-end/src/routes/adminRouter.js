const { Router } = require('express');
const adminController = require('../controller/admin-controller');

const router = Router();

router.post('/manage', adminController.createNewUser);

module.exports = router;
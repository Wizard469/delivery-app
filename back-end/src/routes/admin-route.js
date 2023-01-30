const { Router } = require('express');
const adminController = require('../controller/admin-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const router = Router();

router.post('/', authMiddleware, adminController.createNewUser);

module.exports = router;
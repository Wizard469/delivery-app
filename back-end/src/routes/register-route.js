const { Router } = require('express');
const usersController = require('../controller/users-controller');

const router = Router();

router.post('/', usersController.create);

module.exports = router;

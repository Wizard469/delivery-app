const { Router } = require('express');
const usersController = require('../controller/users-controller');

const router = Router();

router.post('/', usersController.login);
router.get('/sellers', usersController.getSellers);

module.exports = router;

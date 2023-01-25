const usersService = require('../service/users-service');

const login = async (req, res, next) => {
  try {
  const payload = await usersService.login(req.body);

  res.status(200).json(payload);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};

const usersService = require('../service/users-service');

const login = async (req, res, next) => {
  try {
  const { email, password } = req.body;
  console.log(email, password);
  const token = await usersService.login(req.body);

  res.status(200).json(token);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};

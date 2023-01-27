const usersService = require('../service/users-service');

const create = async (req, res, next) => {
  try {
    const newUser = await usersService.create(req.body);

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const payload = await usersService.login(req.body);

    res.status(200).json(payload);
  } catch (err) {
    next(err);
  }
};

const getSellers = async (_req, res) => {
  const payload = await usersService.getSellers();
  res.status(200).json(payload);
};

module.exports = {
  create,
  login,
  getSellers,
};

const adminService = require('../service/admin-service');

const createNewUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const newUser = await adminService.createNewUser({ name, email, password, role });
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createNewUser,
};
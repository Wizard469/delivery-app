const adminService = require('../service/admin-service');

const createNewUser = async (req, res) => {
  try {
    const { id, name, email, password } = req.body;
    const newUser = await userService.create({ id, name, email, password });
    res.status(200).json(newUser);
    
  } catch (error) {
    next(error);
  }

};

module.exports = {
  createNewUser,
};
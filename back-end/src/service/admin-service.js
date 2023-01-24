const { User } = require('../database/models');
const { HttpException } = require('../utils/error/httpException');

const createNewUser = async (newUser) => {
  const { name, email, password, role } = newUser; 
  const verifyName = await User.findOne({ where: { name } });
  const verifyEmail = await User.findOne({ where: { email } });

  if (verifyEmail || verifyName) {
   throw HttpException(409, 'User already registered');
  }
  const createUser = await User.create({ name, email, password, role });
  return createUser;
};

module.exports = {
  createNewUser,
};
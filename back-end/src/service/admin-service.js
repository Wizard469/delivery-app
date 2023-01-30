const md5 = require('md5');
const { User } = require('../database/models');
const HttpException = require('../utils/error/httpException');
const { jwtSign } = require('../utils/jwt');

const createNewUser = async (newUser) => {
  const { name, email, password, role } = newUser; 
  console.log('newUser:', newUser);
  const verifyName = await User.findOne({ where: { name } });
  const verifyEmail = await User.findOne({ where: { email } });
 
  if (verifyEmail || verifyName) {
    throw new HttpException(409, 'User already registered');
  }
  const cryptPassword = md5(password); 
  
  if (role === 'vendedor') {
    const createUser = await User.create({ name, email, password: cryptPassword, role: 'seller' });
    const { password: pwd, ...rest } = createUser.dataValues;
    const token = jwtSign(rest);
    return { ...rest, token };
  }
  const createUser = await User.create({ name, email, password: cryptPassword, role });
  const { password: pwd, ...rest } = createUser.dataValues;
  const token = jwtSign(rest);
  return { ...rest, token };
};

module.exports = {
  createNewUser,
};
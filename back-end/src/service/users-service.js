const md5 = require('md5');
const { User } = require('../database/models');
const HttpException = require('../utils/error/httpException');
const { jwtSign } = require('../utils/jwt');

const create = async (body) => {
  const { name, email, password } = body;
  const role = 'customer';

  const userByName = await User.findOne({ where: { name } });
  const userByEmail = await User.findOne({ where: { email } });

  if (userByName || userByEmail) throw new HttpException(409, 'User already exists');

  const md5Pwd = md5(password);
  const newUser = await User.create({ name, password: md5Pwd, email, role });

  const { password: pwd, ...rest } = newUser.dataValues;
  const token = jwtSign(rest);

  return { ...rest, token };
};

const login = async (body) => {
  const { email, password } = body;
  const user = await User.findOne({ where: { email } });

  if (!user) throw new HttpException(404, 'User not found');

  const { password: pwd, ...rest } = user.dataValues;
  const md5Pwd = md5(password);

  if (md5Pwd === pwd) {
    const token = jwtSign(rest);

    return { ...rest, token };
  }
};

module.exports = {
  create,
  login,
};

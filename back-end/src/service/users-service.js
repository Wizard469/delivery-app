const md5 = require('md5');
const { User } = require('../database/models');
const HttpException = require('../utils/error/httpException');
const { jwtSign } = require('../utils/jwt');

const login = async (body) => {
  const { email, password } = body;
  const user = await User.findOne({ where: { email } });

  if (!user) throw new HttpException(404, 'User not found');

  const { name, password: pwd, role, id } = user;
  const md5Pwd = md5(password);

  if (md5Pwd === pwd) {
    const token = jwtSign({ name, email, role, id });

    return { name, email, role, token, id };
  }
};

module.exports = {
  login,
};

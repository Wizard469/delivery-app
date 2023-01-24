const { sign, verify } = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '20d',
  algorithm: 'HS256',
};

const SECRET_KEY = 'superDuperSecretKey';

const jwtSign = (payload) => sign(payload, SECRET_KEY, jwtConfig);

const jwtVerify = (token) => verify(token, SECRET_KEY);

module.exports = { jwtSign, jwtVerify };

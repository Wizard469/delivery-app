const { sign, verify } = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '20d',
  algorithm: 'HS256',
};

const jwtKey = require("fs")
  .readFileSync("./jwt.evaluation.key", { encoding: "utf-8" });

const jwtSign = (payload) => sign(payload, jwtKey, jwtConfig);

const jwtVerify = (token) => verify(token, jwtKey);

module.exports = { jwtSign, jwtVerify };

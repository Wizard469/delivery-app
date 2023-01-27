const { jwtVerify } = require('../utils/jwt');

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    try {
      jwtVerify(authorization);

      return next();
    } catch (error) {
      res.status(403).json({ message: 'Invalid Token' });
    }
  }
};

module.exports = authMiddleware;
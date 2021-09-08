const jwt = require('jsonwebtoken');

module.exports.accessToken = (payload) => {
  const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_KEY, { expiresIn: '2h' })
  return accessToken;
}
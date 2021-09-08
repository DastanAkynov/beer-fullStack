const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  if(req.method === 'OPTIONS') next()
  
  try {
    const token = req.headers.authorization.split(' ')[1];
    

    if(!token) {
      return res.status(403).json({ message: 'Пользователь не авторизован'})
    }
    
    const decodedToken = await jwt.verify(token, process.env.ACCESS_TOKEN_KEY)

    if(!decodedToken) {
      return res.status(403).json({ message: 'Пользователь не авторизован'})
    }

    req.user = decodedToken

    next()

  } catch (e) {
    return res.status(403).json({ message: 'Пользователь не авторизован'})
  }
}
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    if(req.method === 'OPTIONS') next()
    try {
      const token = req.headers.authorization.split(' ')[1]
      
      if(!token) {
        return res.status(403).json({ message: 'Пользователь не авторизован'})
      }
      
      const data = jwt.verify(token, process.env.ACCESS_TOKEN_KEY)   //role as userRole
      
      if (data.role && data.role !== 'ADMIN') {
        return res.status(403).json({ message: 'У вас нет доступа'})
      }

      next()
  
    } catch (e) {
      return res.status(403).json({ message: 'Пользователь не авторизован'})
    }
}

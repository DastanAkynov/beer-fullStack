const User = require('../model/UserModel');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator'); 
const { accessToken } = require('../service/token-service');
const errorHandler = require('../utils/errorHandler');

module.exports.registration = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array(), message: 'Некорректные данные при регистрации'})
    }

    const {name, password, address} = req.body;
    console.log(name, password, address)

    const candidate = await User.findOne({name});
    if(candidate) {
      return res.status(300).json({message: 'Пользователь с таким именем уже зарегестртрован'})
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({name, address, password: hashedPassword})
    await user.save()
    res.status(201).json({message: 'Вы успешно зарегестрированы!!!'})
  } catch(e) {
    errorHandler(res, e)
  }
}


module.exports.login = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array(), message: 'Некорректные данные при регистрации'})
    }

    const {name, password} = req.body;

    const candidate = await User.findOne({name});
    if(!candidate) {
      return res.status(300).json({message: 'Пользователь с таким именем уже зарегестртрован'})
    }

    const isMatch= await bcrypt.compare(password, candidate.password);
    if(!isMatch) {
      return res.status(401).json({message: "Пароли не совпадают"})
    }

    const payload = {userId: candidate.id}
    const token = await accessToken(payload)

    res.json(({token, userId: candidate.id, message: `Добро пожаловать ${candidate.name}`}))

  } catch(e) {
    errorHandler(res, e)
  }
}
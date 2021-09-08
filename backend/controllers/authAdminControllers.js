const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator'); 
const errorHandler = require('../utils/errorHandler');
const Admin = require('../model/AdminModel');
const tokenService = require('../service/token-service');
const RoleModel = require('../model/RoleModel');

module.exports.registration = async(req, res) => {
  try{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array(), message: 'Некорректные данные при регистрации'})
    }
    const {name, password, role} = req.body;

    const candidate = await Admin.findOne({name})
    if(candidate) {
      return res.status(300).json({message: 'Пользователь с таким email уже зарегестртрован'})
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    await new Admin({name, password: hashedPassword, role: role}).save();

    res.status(201).json({message: 'Вы успешно зарегестрированы!!!'})
  } catch(e) {
    errorHandler(res, e)
  }
}

module.exports.login = async(req, res) => {
  try{
    const {name, password} = req.body;
  
    const candidate = await Admin.findOne({name})
    if(!candidate) {
      return res.status(300).json({message: 'Пользователь с таким именем не зарегестртрован'})
    }

    const isMatch = await bcrypt.compare(password, candidate.password);
    if(!isMatch){
      return res.status(401).json({message: "Пароли не совпадают"})
    }

    const payload = {userId: candidate.id, role: candidate.role}
    const token = await tokenService.accessToken(payload)

    res.json(({token, userId: candidate.id, role: candidate.role}))

  } catch(e) {
    errorHandler(res, e)
  }
}
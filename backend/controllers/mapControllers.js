const Map = require('../model/MapModel');
const User = require('../model/UserModel');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async (req, res) => {
  try {
    const mapData = await Map.find()

    console.log(mapData)
    res.status(200).json(mapData)
  } catch(e) {
    errorHandler(res, e)
  }
}

module.exports.create = async (req, res) => {
  try {
    const {name, address, phone, lat, lng} = req.body

    await new Map({name, address, phone, lat, lng}).save()

    res.status(201).json({ message: 'Данные успешно добавлены в Б/Д' })
  } catch(e) {
    errorHandler(res, e)
  }
}


module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.find()
    const usersInfo = []

    users.map(el => {
      usersInfo.push({name: el.name, address: el.address, id: el._id})
    })
    
    res.status(200).json(usersInfo)
  } catch(e) {
    errorHandler(res, e)
  }
}
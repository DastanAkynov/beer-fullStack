const Order = require('../model/OrderModel');
const messageService = require('../service/message-service');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async(req, res) => {
  try{
    const orders = await Order.find().populate('user', 'name').exec()    //выбирает заказы по id и добавляет к нему данные user
    res.json(orders) 
  } catch(e) {
    errorHandler(res, e)
  }
}

module.exports.getUserOrder = async(req, res) => {
  try{
    const orders = await Order.find({user: req.params.userId}).sort({date: -1})
    res.status(200).json(orders) 
  } catch(e) {
    errorHandler(res, e)
  }
}


module.exports.create = async(req, res) => {
  try {
    const {list, id, userInfo} = req.body;

    const lastOrder = await Order
      .findOne({user: id})         //получает заказы одного пользователя
      .sort({date: -1})            //сортирует дату заказов по убыванию

    const maxOrder = lastOrder ? lastOrder.order : 0;  //если есть заказы то берем последний заказ, если нет то по умолчанию 0
    
    const order = await new Order({
      list: list,
      user: id,
      order: maxOrder + 1
    }).save();

    await messageService.sendMessage(userInfo)        //Оправляет сообщение на WatsUp

    res.status(201).json({order, message: "Ваш заказ принят. Наш оператор свяжется с вами через некоторое врямя."})
  } catch(e) {
    errorHandler(res, e)
  }
}


//если в populate указано, то из реферосного значения берет только name добавляет к order
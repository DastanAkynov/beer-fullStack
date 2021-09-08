const Product = require('../model/ProductModel')
const errorHandler = require('../utils/errorHandler')

module.exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (e) {
    errorHandler(res, e)
  }
}

module.exports.makeNewProducts = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = req.file.filename
    }
    const productData = new Product(req.body)
  
    await productData.save();
    
    res.status(201).json({message: 'Товар успешно создан'})
  } catch (e) {
    errorHandler(res, e)
  }
}


module.exports.removeProduct = async(req, res) => {
  try{
    await Product.remove({_id: req.params.id})
    res.json({message: 'Продукт успешно удален'})
  } catch(e) {
    errorHandler(res, e)
  }
}

module.exports.updateProduct = async(req, res) => {
  try{
    const id = req.params.id
    let newProducts = {}
    Object.keys(req.body).map(el => {
      if(req.body[el].trim()) {
       newProducts = {...newProducts, [el]: req.body[el]}
      }
      return null
    })

    if(Object.keys(newProducts).length == 0) {
      return res.status(400).json({message: 'Для сохранения данных, ввести новые значения'})
    }

    await Product.findByIdAndUpdate(id, newProducts, (err, data) => {
      if(err){
        return res.status(400).json({message: 'Проблемы при обновлении продукта'})
      } 
      res.json({data, message: 'Вы успешно обновили продукт!'})
    }) 

  } catch(e) {
    errorHandler(res, e)
  }
}

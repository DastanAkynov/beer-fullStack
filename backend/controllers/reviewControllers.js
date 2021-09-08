const Review = require("../model/ReviewModel")
const errorHandler = require("../utils/errorHandler")

module.exports.getAll = async(req, res) => {
  try {
    const reviews = await Review.find({location: req.params.id})
    res.json({reviews})
  } catch(e) {
    errorHandler(res, e)
  }
}

module.exports.create = async(req, res) => {
  try {
    const {review, locationId, userId} = req.body
    
    const createdRev = await new Review({review, location: locationId, owner: userId})
    createdRev.save()
    res.json({message: 'Ваш отзыв успешно сохранен!'})
    
  } catch(e) {
    errorHandler(res, e)
  }
}
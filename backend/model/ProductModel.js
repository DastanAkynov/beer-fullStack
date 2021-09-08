const {Schema, model} = require('mongoose');

const ProductSchema = new Schema ({
  name: { type: String},
  volume: {type: Number, required: true},
  price: { type: Number, required: true},
  abv: {type: Number, required: true},
  view: {type: String, required: true},
  color: {type: String, required: true},
  image: {type: String, default: ''},
  description: {type: String},
  structure: {type: String},
  category: {ref: 'Category', type: Schema.Types.ObjectId}
})

const ProductModel = model('Product', ProductSchema);

module.exports = ProductModel;
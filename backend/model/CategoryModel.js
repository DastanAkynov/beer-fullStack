const {Schema, model} = require('mongoose');

const CategorySchema = new Schema ({
  name: { type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
})

const CategoryModel = model('Product', CategorySchema);

module.exports = CategoryModel;
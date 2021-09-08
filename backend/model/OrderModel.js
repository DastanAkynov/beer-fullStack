const {Schema, model} = require('mongoose');

const OrderSchema = new Schema ({
  date: { type: Date, default: Date.now},
  order: {type: Number, required: true},
  list: [
    {
      name: {type: String},
      counter: {type: Number},
      price: {type: Number},
      sum: {type: Number}
    }
  ],
  user: {type: Schema.Types.ObjectId, ref: 'User'}
})

const OrderModel = model('Order', OrderSchema);

module.exports = OrderModel;
const {Schema, model} = require('mongoose');

const ReviewSchema = new Schema ({
  review: { type: String, required: true},
  date: { type: Date, default: Date.now},
  location: {type: Schema.Types.ObjectId, ref:'Map'},
  owner: { type: Schema.Types.ObjectId, ref: 'AdminModel'}
})

const ReviewModel = model('Review', ReviewSchema);

module.exports = ReviewModel;
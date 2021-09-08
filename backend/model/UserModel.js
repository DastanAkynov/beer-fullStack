const {Schema, model} = require('mongoose');

const UserSchema = new Schema ({
  name: { type: String, required: true, unique: true},
  address: { type: String, required: true},
  password: {type: String, required: true},
  order: [{ ref: 'Order', type: Schema.Types.ObjectId}]
})

const UserModel = model('User', UserSchema);

module.exports = UserModel;
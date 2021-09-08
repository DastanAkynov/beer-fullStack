const {Schema, model} = require('mongoose');

const AdminSchema = new Schema ({
  name: { type: String, required: true, unique: true},
  role: {type: String, required: true, default: 'AGENT'},
  password: {type: String, required: true}
})

const AdminModel = model('Admin', AdminSchema);

module.exports = AdminModel;
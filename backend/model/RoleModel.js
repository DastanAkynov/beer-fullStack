const {Schema, model} = require('mongoose');

const RoleSchema = new Schema ({
  value: {type: String, unique: true, default: 'AGENT'}
})

const RoleModel = model('Role', RoleSchema);

module.exports = RoleModel;
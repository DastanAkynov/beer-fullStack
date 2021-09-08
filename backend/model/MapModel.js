const {Schema, model} = require('mongoose');

const MapSchema = new Schema ({
  name: { type: String, required: true},
  address: {type: String, required: true},
  phone: {type: Number, required: true},
  lat: {type: Number, required: true},
  lng: {type: Number, required: true},
  active: {type: Boolean, default: 'true'}
})

const MapModel = model('Map', MapSchema);

module.exports = MapModel;
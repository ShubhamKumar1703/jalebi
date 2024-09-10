// models/Bus.js
const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  route: String,
  lat: Number,       // Current latitude
  lng: Number,       // Current longitude
  endLat: Number,    // Destination latitude
  endLng: Number,    // Destination longitude
  originalLat: Number, // Original start latitude
  originalLng: Number, // Original start longitude
  crowd: String,
  delayed: Boolean
});

const Bus = mongoose.model('Bus', busSchema);
module.exports = Bus;

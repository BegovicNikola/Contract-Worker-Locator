const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoLocationSchema = new Schema({
  type: {
    type: String,
    default: 'Point'
  },
  coordinates: {
    type: [Number],
    index: '2dsphere'
  }
});

const GeoLocation = mongoose.model('geolocation', GeoLocationSchema);

module.exports = GeoLocation;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GeoLocation = require('./geolocation');

const FreelancerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  expirience: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: new GeoLocation()
});

const Freelancer = mongoose.model('freelancer', FreelancerSchema);

module.exports = Freelancer;

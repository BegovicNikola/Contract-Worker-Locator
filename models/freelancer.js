const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  }
});

const Freelancer = mongoose.model('freelancer', FreelancerSchema);

module.exports = Freelancer;

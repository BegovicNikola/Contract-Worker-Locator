const express = require('express');
const router = express.Router();
const Freelancer = require('../models/freelancer');

router.get('/freelancers', (req, res, next) => {
  Freelancer.find({}).then(freelancers => {
    res.send(freelancers);
  });
});

router.post('/freelancers', (req, res, next) => {
  Freelancer.create(req.body)
    .then(freelancer => {
      res.send(freelancer);
    })
    .catch(next);
});

router.put('/freelancers/:id', (req, res, next) => {
  Freelancer.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Freelancer.findOne({ _id: req.params.id }).then(freelancer => {
      res.send(freelancer);
    });
  });
});

router.delete('/freelancers/:id', (req, res, next) => {
  Freelancer.findByIdAndRemove({ _id: req.params.id }).then(freelancer => {
    res.send(freelancer);
  });
});

module.exports = router;

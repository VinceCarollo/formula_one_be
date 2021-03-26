var express = require('express');
var router = express.Router();
var models = require("../models/index");

/* GET home page. */
router.get('/', function(req, res, next) {
  models.drivers.findAll().then(users => res.json(users))
});

module.exports = router;

'use strict';

var express = require('express');

var router = module.exports = new express.Router();

router.get('/', function(req, res, next) {
  req.session.preved = "PREVED";
  next();
});
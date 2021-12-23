"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _test = require("../controllers/test");

var router = (0, _express.Router)();
router.get('/test', _test.getTest);
router.get('/test/coutnt', _test.getTestCount);
router.get('/test/:id', _test.getTeste);
router.post('/test', _test.createTest);
router["delete"]('/test/:id', _test.DeletTest);
router.put('/test/:id', _test.UpdateTest);
var _default = router;
exports["default"] = _default;
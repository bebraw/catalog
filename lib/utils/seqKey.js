"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (namespace) {
  var counter = void 0;
  counter = 0;
  return function () {
    return namespace + "-" + counter++;
  };
};
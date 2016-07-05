"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// A little helper to require babel-transformed modules with default export

exports.default = function (module) {
  return module.__esModule ? module.default : module;
};
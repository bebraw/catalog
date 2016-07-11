'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactMarkdown = require('./react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MARKDOWN_CONFIG = {
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: true
};

exports.default = function (_ref) {
  var text = _ref.text;
  var renderer = _ref.renderer;

  return (0, _reactMarkdown2.default)(text, _extends({}, MARKDOWN_CONFIG, {
    renderer: Object.assign(new _reactMarkdown2.default.Renderer(), renderer)
  }));
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _babelStandalone = require('babel-standalone');

var _requireModuleDefault = require('./requireModuleDefault');

var _requireModuleDefault2 = _interopRequireDefault(_requireModuleDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var presets = ['es2015-loose', 'react', 'stage-2'];

var cached = {};
var cachedTransform = function cachedTransform(jsx) {
  if (cached[jsx]) {
    return cached[jsx];
  }
  var transformed = (0, _babelStandalone.transform)(jsx, { compact: false, presets: presets }).code;
  cached[jsx] = transformed;
  return transformed;
};

var missingTransformError = {
  error: 'Please include [babel-standalone](https://github.com/Daniel15/babel-standalone) before Catalog.'
};

exports.default = function (jsx, imports) {
  // Check for transform to provide a better error message
  try {
    _babelStandalone.transform;
  } catch (error) {
    return missingTransformError;
  }

  try {
    var importKeys = Object.keys(imports).filter(function (k) {
      return imports[k];
    });
    var importModules = importKeys.map(function (k) {
      return (0, _requireModuleDefault2.default)(imports[k]);
    });
    var transformed = cachedTransform(jsx);
    var code = transformed.replace(/React\.createElement/, ';return React.createElement');
    var element = new (Function.prototype.bind.apply(Function, [null].concat(['React'], _toConsumableArray(importKeys), [code])))().apply(undefined, [_react2.default].concat(_toConsumableArray(importModules))); // eslint-disable-line no-new-func
    return { element: element };
  } catch (error) {
    return { error: error };
  }
};
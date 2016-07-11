'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getType = _ramda2.default.compose(_ramda2.default.toLower, _ramda2.default.head, _ramda2.default.split('|'));

var parseSpecimenType = function parseSpecimenType() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  return _ramda2.default.or(getType(options), 'raw-code');
};

exports.default = parseSpecimenType;
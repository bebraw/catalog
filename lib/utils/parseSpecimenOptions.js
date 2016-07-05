'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _mapSpecimenOption = require('./mapSpecimenOption');

var _mapSpecimenOption2 = _interopRequireDefault(_mapSpecimenOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var removeEmpty = _ramda2.default.filter(_ramda2.default.complement(_ramda2.default.isEmpty));
var splitType = _ramda2.default.compose(removeEmpty, _ramda2.default.split('|'));
var splitOptions = _ramda2.default.compose(removeEmpty, _ramda2.default.split(','));

var camelize = function camelize(str) {
  return str.replace(/-(\w)/g, function (_, c) {
    return c.toUpperCase();
  });
};

var nothing = function nothing() {
  return null;
};
var mapSpanToProp = (0, _mapSpecimenOption2.default)(/^span-(\d)$/, function (v) {
  return { span: +v };
});
var camelizeOption = function camelizeOption(option) {
  return _defineProperty({}, camelize(option), true);
};

var optionToKeyValue = function optionToKeyValue(mapOptionsToProps) {
  return function (option) {
    var _arr = [mapOptionsToProps, mapSpanToProp];

    for (var _i = 0; _i < _arr.length; _i++) {
      var mapper = _arr[_i];
      if (typeof mapper === 'function') {
        var prop = mapper(option);
        if (prop !== null) {
          return prop;
        }
      }
    }
    return camelizeOption(option);
  };
};

var parseSpecimenOptions = function parseSpecimenOptions() {
  var mapOptionsToProps = arguments.length <= 0 || arguments[0] === undefined ? nothing : arguments[0];
  return function () {
    var options = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    var _splitType = splitType(options);

    var _splitType2 = _slicedToArray(_splitType, 2);

    var _splitType2$ = _splitType2[1];
    var restOptions = _splitType2$ === undefined ? '' : _splitType2$;

    return _ramda2.default.mergeAll(splitOptions(restOptions).map(optionToKeyValue(mapOptionsToProps)));
  };
};

exports.default = parseSpecimenOptions;
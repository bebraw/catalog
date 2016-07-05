'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSpecimenBody = exports.parseSpecimenYamlBody = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _jsYaml = require('js-yaml');

var yamlOptions = { schema: _jsYaml.CORE_SCHEMA };

var defaultMapBodyToProps = function defaultMapBodyToProps(parsedBody, rawBody) {
  return parsedBody || rawBody;
};

var INITIAL_SEPARATOR = '---\n';
var SEPARATOR = '\n---\n';
var splitText = function splitText(text) {
  if (text.indexOf(INITIAL_SEPARATOR) === 0) {
    return [void 0, text.slice(4)];
  }
  var i = text.indexOf(SEPARATOR);
  return i > -1 ? [text.slice(0, i), text.slice(i + 5)] : [void 0, text];
};

var parseYaml = function parseYaml(str) {
  var parsed = void 0;
  try {
    parsed = (0, _jsYaml.safeLoad)(str, yamlOptions);
  } catch (e) {
    parsed = void 0;
  }
  return typeof parsed === 'string' ? void 0 : parsed;
};

var parseSpecimenYamlBody = exports.parseSpecimenYamlBody = function parseSpecimenYamlBody(_mapBodyToProps) {
  return function () {
    var body = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    var mapBodyToProps = _mapBodyToProps || defaultMapBodyToProps;
    return mapBodyToProps(parseYaml(body), body);
  };
};

var parseSpecimenBody = exports.parseSpecimenBody = function parseSpecimenBody(_mapBodyToProps) {
  return function () {
    var body = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    var mapBodyToProps = _mapBodyToProps || defaultMapBodyToProps;
    var splitBody = splitText(body);

    var _splitBody = _slicedToArray(splitBody, 2);

    var props = _splitBody[0];
    var children = _splitBody[1];

    return mapBodyToProps(_extends({}, parseYaml(props), { children: children }), body);
  };
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var external = /^https?:\/\//;

var RadiumRouterLink = (0, _radium2.default)(_reactRouter.Link);

var Link = function Link(_ref) {
  var to = _ref.to;

  var rest = _objectWithoutProperties(_ref, ['to']);

  return external.test(to) ? _react2.default.createElement('a', _extends({ href: to }, rest)) : _react2.default.createElement(RadiumRouterLink, _extends({ to: to }, rest));
};

Link.propTypes = {
  to: _react.PropTypes.string.isRequired
};

exports.default = Link;
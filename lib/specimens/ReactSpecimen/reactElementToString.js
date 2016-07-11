'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*

Turns a React element into its JSX string representation.

Probably not complete

Features:

- Uses self-closing tags when no children are set
- Uses a single line for one/none prop
- Uses multiple lines for multiple props
- Sorts props alphabetically
- Removes defaultProps from output

Needs work:

- Don't use JSON.stringify: Nested objects are rendered as JSON (e.g. <div style={{"foo":"bar"}} />)

*/

var reactElementToString = function reactElementToString(el) {
  var indent = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  if (el === void 0) {
    return '';
  }

  if (typeof el === 'string') {
    return '' + indent + el;
  }

  var props = el.props;
  var type = el.type;

  var displayName = '';
  var defaultProps = null;

  if (typeof type === 'string') {
    displayName = type;
  } else {
    displayName = type.displayName || type.name;
    defaultProps = type.defaultProps;
  }

  var formatProp = function formatProp(k, v) {
    if (v === true) {
      return k;
    }
    if (typeof v === 'string') {
      return k + '=\'' + v + '\'';
    }
    return _react2.default.isValidElement(v) ? k + '={' + reactElementToString(v) + '}' : k + '={' + (JSON.stringify(v) || v.name || (typeof v === 'undefined' ? 'undefined' : _typeof(v))) + '}';
  };

  var propKeys = Object.keys(props).sort().filter(function (k) {
    return k !== 'children';
  }).filter(function (k) {
    return defaultProps ? props[k] !== defaultProps[k] : true;
  });

  var propString = propKeys.map(function (k) {
    return formatProp(k, props[k]);
  }).join('\n' + indent + '  ');

  var whitespaceBeforeProps = propKeys.length > 1 // eslint-disable-line no-nested-ternary
  ? '\n' + indent + '  ' : propKeys.length === 1 ? ' ' : '';
  var whitespaceAfterProps = propKeys.length > 1 ? '\n' + indent : '';

  return props.children ? indent + '<' + displayName + whitespaceBeforeProps + propString + whitespaceAfterProps + '>\n' + _react2.default.Children.map(props.children, function (c) {
    return reactElementToString(c, indent + '  ');
  }).join('\n') + '\n' + indent + '</' + displayName + '>' : indent + '<' + displayName + whitespaceBeforeProps + propString + whitespaceAfterProps + ' />';
};

exports.default = reactElementToString;
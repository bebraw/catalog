'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.orderedList = orderedList;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Base styles

var baseTextStyle = {
  fontStyle: 'normal',
  fontWeight: 400,
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale'
};

var baseListStyle = {
  width: '100%',
  marginLeft: 0,
  paddingLeft: '2rem'
};

// Helpers

// Modular scale font size helper; level can be negative (for smaller font sizes) and positive (for larger font sizes) integers; level 0 === baseFontSize
var getFontSize = exports.getFontSize = function getFontSize(_ref) {
  var baseFontSize = _ref.baseFontSize;
  var msRatio = _ref.msRatio;
  var level = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  return baseFontSize * Math.pow(msRatio, level) + 'px';
};

var inlineElements = function inlineElements(theme) {
  var _ref2;

  var selector = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  return _ref2 = {}, _defineProperty(_ref2, selector + ' i, em', {
    fontStyle: 'italic'
  }), _defineProperty(_ref2, selector + ' b, strong', {
    fontWeight: 700
  }), _defineProperty(_ref2, selector + ' a', {
    color: theme.linkColor,
    textDecoration: 'none'
  }), _defineProperty(_ref2, selector + ' a:hover', {
    textDecoration: 'underline'
  }), _defineProperty(_ref2, selector + ' code', {
    background: theme.bgLight,
    border: '1px solid #eee',
    borderRadius: 1,
    display: 'inline-block',
    fontFamily: theme.fontMono,
    lineHeight: 1,
    padding: '0.12em 0.2em',
    textIndent: 0
  }), _defineProperty(_ref2, selector + ' img', {
    maxWidth: '100%'
  }), _ref2;
};

var adjacent = function adjacent() {
  var precedingSelectors = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var selector = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
  var style = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
  return _defineProperty({}, precedingSelectors.map(function (s) {
    return s + '+' + selector;
  }).join(','), style);
};

// Exports

// Text font style
var text = exports.text = function text(theme) {
  var level = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  return _extends({}, baseTextStyle, {
    color: theme.textColor,
    fontFamily: theme.fontFamily,
    fontSize: getFontSize(theme, level),
    lineHeight: theme.msRatio * theme.msRatio
  });
};

// Heading font style
var heading = exports.heading = function heading(theme) {
  var level = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  return _extends({}, baseTextStyle, {
    color: theme.brandColor,
    fontFamily: theme.fontHeading,
    fontSize: getFontSize(theme, level),
    lineHeight: theme.msRatio
  });
};

// Block element styles

var textBlock = exports.textBlock = function textBlock(theme) {
  var selector = arguments.length <= 1 || arguments[1] === undefined ? 'p' : arguments[1];
  var level = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
  return _extends(_defineProperty({}, selector, _extends({}, text(theme, level), {
    flexBasis: '100%',
    margin: '16px 0 0 0'
  })), inlineElements(theme, selector + ' >'));
};

var headingBlock = exports.headingBlock = function headingBlock(theme) {
  var selector = arguments.length <= 1 || arguments[1] === undefined ? 'h1' : arguments[1];
  var level = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
  return _extends(_defineProperty({}, selector, _extends({}, heading(theme, level), {
    flexBasis: '100%',
    margin: '48px 0 0 0'
  })), adjacent(['blockquote', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'], selector, {
    margin: '16px 0 0 0'
  }), inlineElements(theme, selector + ' >'));
};

var unorderedList = exports.unorderedList = function unorderedList(theme) {
  var selector = arguments.length <= 1 || arguments[1] === undefined ? 'ul' : arguments[1];
  var level = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
  var depth = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

  var nestedStyles = depth < 3 ? unorderedList(theme, selector + ' > li > ul', level, depth + 1) : {};
  return _extends(_defineProperty({}, selector, _extends({}, baseListStyle, text(theme, level), {
    listStyle: 'disc',
    marginTop: depth > 0 ? 0 : '16px',
    marginBottom: 0
  })), inlineElements(theme, selector), nestedStyles);
};

function orderedList(theme) {
  var selector = arguments.length <= 1 || arguments[1] === undefined ? 'ol' : arguments[1];
  var level = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
  var depth = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

  var nestedStyles = depth < 3 ? orderedList(theme, selector + ' > li > ol', level, depth + 1) : {};
  return _extends(_defineProperty({}, selector, _extends({}, baseListStyle, text(theme, level), {
    listStyle: 'ordinal',
    marginTop: depth > 0 ? 0 : '16px',
    marginBottom: 0
  })), inlineElements(theme, selector), nestedStyles);
}

var blockquote = exports.blockquote = function blockquote(theme) {
  return {
    blockquote: {
      quotes: 'none',
      margin: '48px 0 32px -20px',
      padding: '0 0 0 20px',
      borderLeft: '1px solid ' + theme.lightColor
    },
    'blockquote > :first-child': {
      marginTop: 0
    },
    'blockquote > :last-child': {
      marginBottom: 0
    },
    'blockquote::before, blockquote::after': {
      content: 'none'
    }
  };
};
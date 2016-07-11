'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prismjs = require('prismjs');

var _prismjs2 = _interopRequireDefault(_prismjs);

require('prismjs/components/prism-jsx');

require('prismjs/components/prism-markdown');

var _typography = require('../../styles/typography');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getStyle = function getStyle(theme) {
  return {
    pre: _extends({}, (0, _typography.text)(theme, -0.5), {
      background: '#fff',
      border: 'none',
      boxSizing: 'border-box',
      color: theme.codeColor,
      display: 'block',
      height: 'auto',
      margin: 0,
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      padding: 20,
      whiteSpace: 'pre',
      width: '100%'
    }),
    code: {
      fontFamily: theme.fontMono,
      fontWeight: 400
    }
  };
};

var isToken = function isToken(t) {
  return t instanceof _prismjs2.default.Token;
};

var renderPrismTokens = function renderPrismTokens(tokens, styles) {
  return tokens.map(function (t, i) {
    if (isToken(t)) {
      return _react2.default.createElement(
        'span',
        { key: t.type + '-' + i, style: styles[t.type] },
        Array.isArray(t.content) ? renderPrismTokens(t.content, styles) : t.content
      );
    }

    if (typeof t === 'string') {
      return t;
    }

    throw Error('wat');
  });
};

var HighlightedCode = function (_Component) {
  _inherits(HighlightedCode, _Component);

  function HighlightedCode() {
    _classCallCheck(this, HighlightedCode);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HighlightedCode).apply(this, arguments));
  }

  _createClass(HighlightedCode, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var language = _props.language;
      var theme = _props.theme;
      var code = _props.code;

      var styles = getStyle(theme);
      var lang = _prismjs2.default.languages.hasOwnProperty(language) ? language : null;

      return _react2.default.createElement(
        'pre',
        { style: styles.pre },
        _react2.default.createElement(
          'code',
          { style: styles.code },
          lang ? renderPrismTokens(_prismjs2.default.tokenize(code, _prismjs2.default.languages[lang], lang), theme.codeStyles) : code
        )
      );
    }
  }]);

  return HighlightedCode;
}(_react.Component);

exports.default = HighlightedCode;


HighlightedCode.propTypes = {
  language: _react.PropTypes.string,
  theme: _react.PropTypes.object.isRequired,
  code: _react.PropTypes.string.isRequired
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CatalogPropTypes = require('../CatalogPropTypes');

var _radium = require('radium');

var _renderMarkdown = require('../utils/renderMarkdown');

var _renderMarkdown2 = _interopRequireDefault(_renderMarkdown);

var _Specimen = require('../components/Specimen/Specimen');

var _Specimen2 = _interopRequireDefault(_Specimen);

var _typography = require('../styles/typography');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyle(theme) {
  return {
    container: {
      flexBasis: '100%'
    },
    hint: _extends({}, (0, _typography.text)(theme), {
      background: '#fff6dd',
      border: '1px solid #ffefaa',
      borderRadius: '2px',
      color: '#ffb400',
      padding: '20px'
    }),
    neutral: {
      background: '#f9f9f9',
      color: '#666666',
      border: '1px solid #eee'
    },
    warning: {
      background: '#fff5f5',
      border: '1px solid #ffdddd',
      color: '#ee4040'
    },
    directive: {
      background: '#eafaea',
      border: '1px solid #bbebc8',
      color: '#2fbf62'
    }
  };
}

var Hint = function (_React$Component) {
  _inherits(Hint, _React$Component);

  function Hint() {
    _classCallCheck(this, Hint);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Hint).apply(this, arguments));
  }

  _createClass(Hint, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var theme = _props.catalog.theme;
      var children = _props.children;
      var warning = _props.warning;
      var neutral = _props.neutral;
      var directive = _props.directive;

      var styles = getStyle(theme);

      var warningStyle = warning ? styles.warning : null;
      var directiveStyle = directive ? styles.directive : null;
      var neutralStyle = neutral ? styles.neutral : null;

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          'section',
          { style: _extends({}, styles.hint, warningStyle, directiveStyle, neutralStyle), className: 'cg-Hint' },
          _react2.default.createElement(_radium.Style, {
            scopeSelector: '.cg-Hint',
            rules: {
              code: {
                display: 'inline',
                borderRadius: '2px',
                background: 'rgba(0,0,0,.03)',
                fontFamily: theme.fontMono,
                padding: '4px 5px',
                whiteSpace: 'pre-wrap'
              },
              ':first-child': {
                marginTop: 0
              },
              ':last-child': {
                marginBottom: 0
              }
            } }),
          _react2.default.createElement(
            'div',
            null,
            typeof children === 'string' ? (0, _renderMarkdown2.default)({ text: children }) : children
          )
        )
      );
    }
  }]);

  return Hint;
}(_react2.default.Component);

Hint.propTypes = {
  children: _react.PropTypes.node.isRequired,
  catalog: _CatalogPropTypes.catalogShape.isRequired,
  warning: _react.PropTypes.bool,
  neutral: _react.PropTypes.bool,
  directive: _react.PropTypes.bool
};

exports.default = (0, _Specimen2.default)(undefined, undefined, { withChildren: true })(Hint);
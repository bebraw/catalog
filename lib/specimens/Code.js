'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CatalogPropTypes = require('../CatalogPropTypes');

var _typography = require('../styles/typography');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Specimen = require('../components/Specimen/Specimen');

var _Specimen2 = _interopRequireDefault(_Specimen);

var _mapSpecimenOption = require('../utils/mapSpecimenOption');

var _mapSpecimenOption2 = _interopRequireDefault(_mapSpecimenOption);

var _HighlightedCode = require('../components/HighlightedCode/HighlightedCode');

var _HighlightedCode2 = _interopRequireDefault(_HighlightedCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyle(theme) {
  return {
    container: _extends({}, (0, _typography.text)(theme, -0.5), {
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      background: '#fff',
      border: '1px solid #eee',
      color: theme.textColor,
      fontFamily: theme.fontMono,
      fontWeight: 400
    }),
    toggle: {
      textDecoration: 'underline',
      cursor: 'pointer',
      marginBottom: 0,
      padding: 20,
      WebkitUserSelect: 'none',
      userSelect: 'none',
      background: '#eee'
    }
  };
}

var Code = function (_React$Component) {
  _inherits(Code, _React$Component);

  function Code() {
    _classCallCheck(this, Code);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Code).call(this));

    _this.state = {
      viewSource: true
    };
    return _this;
  }

  _createClass(Code, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.collapsed) {
        this.setState({ viewSource: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var theme = _props.catalog.theme;
      var children = _props.children;
      var rawBody = _props.rawBody;
      var collapsed = _props.collapsed;
      var lang = _props.lang;
      var raw = _props.raw;
      var viewSource = this.state.viewSource;

      var styles = getStyle(theme);

      var toggle = collapsed ? _react2.default.createElement(
        'div',
        { style: styles.toggle, onClick: function onClick() {
            return _this2.setState({ viewSource: !viewSource });
          } },
        viewSource ? 'close' : 'show example code'
      ) : null;

      var content = this.state.viewSource ? _react2.default.createElement(_HighlightedCode2.default, { language: lang, code: raw ? rawBody : children, theme: theme }) : null;

      return _react2.default.createElement(
        'section',
        { style: styles.container },
        toggle,
        content
      );
    }
  }]);

  return Code;
}(_react2.default.Component);

Code.propTypes = {
  children: _react.PropTypes.string.isRequired,
  rawBody: _react.PropTypes.string.isRequired,
  catalog: _CatalogPropTypes.catalogShape.isRequired,
  collapsed: _react.PropTypes.bool,
  lang: _react.PropTypes.string,
  raw: _react.PropTypes.bool
};

var mapOptionsToProps = (0, _mapSpecimenOption2.default)(/^lang-(\w+)$/, function (lang) {
  return { lang: lang };
});

var mapBodyToProps = function mapBodyToProps(parsed, rawBody) {
  return _extends({}, parsed, { rawBody: rawBody });
};

exports.default = (0, _Specimen2.default)(mapBodyToProps, mapOptionsToProps, { withChildren: true })((0, _radium2.default)(Code));
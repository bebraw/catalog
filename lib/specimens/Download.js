'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CatalogPropTypes = require('../CatalogPropTypes');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Specimen = require('../components/Specimen/Specimen');

var _Specimen2 = _interopRequireDefault(_Specimen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DownloadIcon = (0, _radium2.default)(function (_ref) {
  var style = _ref.style;
  var fill = _ref.fill;
  return _react2.default.createElement(
    'svg',
    { style: style, viewBox: '0 0 120 120' },
    _react2.default.createElement(
      'g',
      { fill: 'none', 'fill-rule': 'evenodd' },
      _react2.default.createElement('rect', { width: '120', height: '120', fill: '#EEEEEE', rx: '2' }),
      _react2.default.createElement(
        'g',
        { fill: fill },
        _react2.default.createElement('path', { d: 'M72.647 53.353c-.468-.47-1.226-.47-1.697 0L61 63.303V36.2c0-.662-.538-1.2-1.2-1.2-.662 0-1.2.538-1.2 1.2v27.103l-9.95-9.95c-.47-.47-1.23-.47-1.7 0-.468.468-.468 1.226 0 1.697l12 12c.236.232.543.35.85.35.307 0 .614-.118.85-.353l12-12c.468-.468.468-1.226-.003-1.694z' }),
        _react2.default.createElement('path', { d: 'M79 75.8H40.6c-1.985 0-3.6-1.615-3.6-3.6v-4.8c0-.662.538-1.2 1.2-1.2.662 0 1.2.538 1.2 1.2v4.8c0 .662.538 1.2 1.2 1.2H79c.662 0 1.2-.538 1.2-1.2v-4.8c0-.662.538-1.2 1.2-1.2.662 0 1.2.538 1.2 1.2v4.8c0 1.985-1.615 3.6-3.6 3.6z' })
      )
    )
  );
});

function getStyle(theme) {
  return {
    container: {
      width: '100%',
      height: 80,
      background: '#fff',
      border: '1px solid #eee',
      transition: '.4s background',
      // Keep, so Radium attaches hover state
      ':hover': {}
    },
    a: {
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'row',
      textDecoration: 'none'
    },
    img: {
      width: 80,
      height: 80,
      display: 'none',
      '@media (min-width: 630px)': {
        display: 'block'
      }
    },
    titleblock: {
      fontFamily: theme.fontFamily,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1,
      lineHeight: 1.33333,
      padding: '12px 0 12px 16px',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    },
    title: {
      color: theme.brandColor,
      fontSize: theme.fontS,
      fontWeight: 700,
      margin: 0
    },
    subtitle: {
      fontSize: theme.fontS,
      color: '#999',
      margin: 0

    }
  };
}

var DownloadSpecimen = function (_React$Component) {
  _inherits(DownloadSpecimen, _React$Component);

  function DownloadSpecimen() {
    _classCallCheck(this, DownloadSpecimen);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DownloadSpecimen).apply(this, arguments));
  }

  _createClass(DownloadSpecimen, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var theme = _props.catalog.theme;
      var title = _props.title;
      var subtitle = _props.subtitle;
      var url = _props.url;
      var filename = _props.filename;

      var styles = getStyle(theme);
      var isHovered = _radium2.default.getState(this.state, null, ':hover');
      var textColor = isHovered ? { color: theme.linkColor } : {};
      var arrowFill = isHovered ? theme.linkColor : theme.brandColor;

      var image = this.props.span !== 1 ? _react2.default.createElement(DownloadIcon, { style: styles.img, fill: arrowFill }) : null;

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          'a',
          { style: styles.a, href: url, download: filename },
          image,
          _react2.default.createElement(
            'div',
            { style: styles.titleblock },
            _react2.default.createElement(
              'h2',
              { style: _extends({}, styles.title, textColor) },
              title
            ),
            _react2.default.createElement(
              'h3',
              { style: _extends({}, styles.subtitle, textColor) },
              subtitle
            )
          )
        )
      );
    }
  }]);

  return DownloadSpecimen;
}(_react2.default.Component);

DownloadSpecimen.defaultProps = {
  title: '',
  subtitle: '',
  theme: {}
};

DownloadSpecimen.propTypes = {
  catalog: _CatalogPropTypes.catalogShape.isRequired,
  span: _react.PropTypes.number,
  title: _react.PropTypes.string,
  subtitle: _react.PropTypes.string,
  url: _react.PropTypes.string.isRequired,
  filename: _react.PropTypes.string
};

exports.default = (0, _Specimen2.default)()((0, _radium2.default)(DownloadSpecimen));
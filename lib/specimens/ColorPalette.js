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

var _radium2 = _interopRequireDefault(_radium);

var _Specimen = require('../components/Specimen/Specimen');

var _Specimen2 = _interopRequireDefault(_Specimen);

var _d3Color = require('d3-color');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorPaletteItem = function ColorPaletteItem(_ref) {
  var name = _ref.name;
  var value = _ref.value;
  var styles = _ref.styles;

  var contrastingValue = (0, _d3Color.hcl)(value).l < 55 ? '#fff' : '#000';
  return _react2.default.createElement(
    'div',
    { style: _extends({}, styles.paletteItem, { backgroundColor: value }) },
    _react2.default.createElement(
      'div',
      { style: _extends({}, styles.textPalette, { color: contrastingValue }) },
      name,
      ' ',
      _react2.default.createElement(
        'div',
        { style: styles.mono },
        value
      )
    )
  );
};

ColorPaletteItem.propTypes = {
  name: _react.PropTypes.string,
  value: _react.PropTypes.string.isRequired,
  styles: _react.PropTypes.object
};

var ColorPalette = function (_React$Component) {
  _inherits(ColorPalette, _React$Component);

  function ColorPalette() {
    _classCallCheck(this, ColorPalette);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ColorPalette).apply(this, arguments));
  }

  _createClass(ColorPalette, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var theme = _props.catalog.theme;
      var colors = _props.colors;
      var horizontal = _props.horizontal;

      var styles = {
        container: {
          display: 'flex',
          alignItems: 'stretch',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          overflow: 'auto',
          flexBasis: '100%'
        },
        rows: {
          flexDirection: 'row'
        },
        columns: {
          flexDirection: 'column'
        },
        box: {
          flexBasis: 'calc(' + 1 / 6 * 100 + '%)'
        },
        well: {
          alignSelf: 'stretch',
          flex: '0 0 auto',
          height: '111px'
        },
        mono: {
          fontFamily: theme.fontMono
        },
        paletteItem: {
          padding: '20px 10px',
          flexBasis: 'calc(100%)',
          flex: 1
        },
        text: {
          fontFamily: theme.fontFamily,
          color: theme.textColor,
          flex: '0 0 auto',
          boxSizing: 'border-box',
          padding: '10px 0',
          flexBasis: 'calc(100% - 10px)',
          background: theme.background
        },
        textPalette: {
          fontFamily: theme.fontFamily,
          color: theme.textColor,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          opacity: 0.55,
          ':hover': {
            opacity: 1
          }
        },
        info: {
          alignSelf: 'flex-start',
          flex: '1 1 auto',
          width: '7em'
        }
      };

      var paletteItems = colors.map(function (color, i) {
        return _react2.default.createElement(ColorPaletteItem, _extends({ key: i }, color, { styles: styles }));
      });

      return _react2.default.createElement(
        'section',
        { style: _extends({}, styles.container, horizontal ? styles.rows : styles.columns) },
        paletteItems
      );
    }
  }]);

  return ColorPalette;
}(_react2.default.Component);

ColorPalette.propTypes = {
  catalog: _CatalogPropTypes.catalogShape.isRequired,
  colors: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    name: _react.PropTypes.string,
    value: _react.PropTypes.string.isRequired
  })).isRequired,
  horizontal: _react.PropTypes.bool
};

ColorPalette.defaultProps = {
  horizontal: false
};

exports.default = (0, _Specimen2.default)()((0, _radium2.default)(ColorPalette));
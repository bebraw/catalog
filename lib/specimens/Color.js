'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var Color = function (_React$Component) {
  _inherits(Color, _React$Component);

  function Color() {
    _classCallCheck(this, Color);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Color).apply(this, arguments));
  }

  _createClass(Color, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var theme = _props.catalog.theme;
      var value = _props.value;
      var name = _props.name;

      var styles = {
        text: {
          fontFamily: theme.fontFamily,
          color: theme.textColor,
          boxSizing: 'border-box',
          padding: '10px 0',
          background: theme.background
        }
      };

      return _react2.default.createElement(
        'div',
        { style: { width: '100%' } },
        _react2.default.createElement('div', { style: { height: 120, background: value } }),
        _react2.default.createElement(
          'div',
          { style: styles.text },
          name,
          ' ',
          _react2.default.createElement(
            'div',
            { style: { fontFamily: theme.fontMono } },
            value
          )
        )
      );
    }
  }]);

  return Color;
}(_react2.default.Component);

Color.propTypes = {
  catalog: _CatalogPropTypes.catalogShape.isRequired,
  value: _react.PropTypes.string.isRequired,
  name: _react.PropTypes.string
};

exports.default = (0, _Specimen2.default)()((0, _radium2.default)(Color));
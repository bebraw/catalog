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

var _typography = require('../styles/typography');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Audio = function (_React$Component) {
  _inherits(Audio, _React$Component);

  function Audio() {
    _classCallCheck(this, Audio);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Audio).apply(this, arguments));
  }

  _createClass(Audio, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var src = _props.src;
      var title = _props.title;
      var loop = _props.loop;
      var autoplay = _props.autoplay;
      var theme = _props.catalog.theme;


      var styles = {
        section: {
          display: 'flex',
          flexFlow: 'row wrap',
          minWidth: 'calc(100% + 10px)'
        },
        title: _extends({}, (0, _typography.heading)(theme, 1), {
          margin: 0
        }),
        container: {
          width: '100%',
          background: theme.background
        }
      };

      var audioTitle = title !== undefined ? title : src.split('/').slice(-1)[0];

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          'div',
          { style: styles.title },
          audioTitle
        ),
        _react2.default.createElement('audio', { style: { width: '100%' }, src: src, autoPlay: autoplay, loop: loop, controls: true })
      );
    }
  }]);

  return Audio;
}(_react2.default.Component);

Audio.propTypes = {
  catalog: _CatalogPropTypes.catalogShape.isRequired,
  src: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string,
  loop: _react.PropTypes.bool,
  autoplay: _react.PropTypes.bool
};

Audio.defaultProps = {
  loop: false,
  autoplay: false
};

exports.default = (0, _Specimen2.default)()((0, _radium2.default)(Audio));
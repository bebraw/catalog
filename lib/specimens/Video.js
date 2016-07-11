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

var Video = function (_React$Component) {
  _inherits(Video, _React$Component);

  function Video() {
    _classCallCheck(this, Video);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Video).apply(this, arguments));
  }

  _createClass(Video, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var src = _props.src;
      var title = _props.title;
      var muted = _props.muted;
      var loop = _props.loop;
      var autoplay = _props.autoplay;
      var theme = _props.catalog.theme;


      var styles = {
        section: {
          display: 'flex',
          flexFlow: 'row wrap',
          width: '100%'
        },
        container: {
          boxSizing: 'border-box',
          margin: '0 10px 10px 0',
          padding: 0,
          position: 'relative'
        },
        title: _extends({}, (0, _typography.heading)(theme, 1), {
          margin: 0
        })
      };

      return _react2.default.createElement(
        'section',
        { style: styles.section },
        _react2.default.createElement(
          'video',
          {
            src: src,
            autoPlay: autoplay,
            loop: loop,
            muted: muted,
            controls: true,
            style: { width: '100%', height: '100%' }
          },
          'Open ',
          _react2.default.createElement(
            'a',
            { href: src, target: '_blank' },
            'video'
          ),
          ' in a new Tab'
        ),
        title && _react2.default.createElement(
          'div',
          { style: styles.title },
          title
        )
      );
    }
  }]);

  return Video;
}(_react2.default.Component);

Video.propTypes = {
  catalog: _CatalogPropTypes.catalogShape.isRequired,
  src: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string,
  muted: _react.PropTypes.bool,
  loop: _react.PropTypes.bool,
  autoplay: _react.PropTypes.bool
};

exports.default = (0, _Specimen2.default)()((0, _radium2.default)(Video));
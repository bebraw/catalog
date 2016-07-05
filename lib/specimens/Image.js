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

var _renderMarkdown = require('../utils/renderMarkdown');

var _renderMarkdown2 = _interopRequireDefault(_renderMarkdown);

var _typography = require('../styles/typography');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Image).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var theme = _props.catalog.theme;
      var src = _props.src;
      var title = _props.title;
      var overlay = _props.overlay;
      var description = _props.description;

      var options = _objectWithoutProperties(_props, ['catalog', 'src', 'title', 'overlay', 'description']);

      var styles = {
        container: {
          boxSizing: 'border-box',
          padding: '20px',
          position: 'relative',
          background: 'url(' + theme.checkerboardPatternLight + ')',
          color: theme.textColor,
          width: '100%'
        },
        image: {
          maxWidth: '100%'
        },
        overlay: {
          opacity: 0,
          maxWidth: '100%',
          position: 'absolute',
          top: '20px',
          left: '20px',
          ':hover': {
            opacity: 1
          }
        },
        title: _extends({}, (0, _typography.heading)(theme, { level: 6 }), {
          margin: 0
        }),
        truncate: {
          maxWidth: '100%',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        },
        description: _extends({}, (0, _typography.text)(theme, { level: 2 }), {
          marginTop: 5
        }),
        light: {
          background: 'url(' + theme.checkerboardPatternLight + ')'
        },
        dark: {
          background: 'url(' + theme.checkerboardPatternDark + ')',
          color: '#fff'
        },
        plain: {
          background: 'transparent',
          padding: 0
        },
        plain_light: {
          background: theme.bgLight,
          padding: theme.sizeL / 2 + 'px'
        },
        plain_dark: {
          background: theme.bgDark,
          padding: theme.sizeL / 2 + 'px'
        }
      };

      var backgroundStyle = _extends({}, options.plain ? styles.plain : null, options.light ? styles.light : null, options.dark ? styles.dark : null, options.plain && options.light ? styles.plain_light : null, options.plain && options.dark ? styles.plain_dark : null);

      return _react2.default.createElement(
        'div',
        { style: _extends({}, styles.container, backgroundStyle) },
        _react2.default.createElement('img', { style: styles.image, srcSet: src }),
        overlay && _react2.default.createElement('img', { style: _extends({}, styles.overlay, options.plain ? { top: 0, left: 0, maxWidth: '100%' } : null), srcSet: overlay }),
        title && _react2.default.createElement(
          'div',
          { style: styles.title },
          title
        ),
        description && _react2.default.createElement(
          'div',
          { style: _extends({}, styles.description, options.dark ? { color: '#fff' } : null) },
          (0, _renderMarkdown2.default)({ text: description })
        )
      );
    }
  }]);

  return Image;
}(_react2.default.Component);

Image.propTypes = {
  catalog: _CatalogPropTypes.catalogShape.isRequired,
  src: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string,
  overlay: _react.PropTypes.string,
  description: _react.PropTypes.string,
  plain: _react.PropTypes.bool,
  light: _react.PropTypes.bool,
  dark: _react.PropTypes.bool
};

exports.default = (0, _Specimen2.default)()((0, _radium2.default)(Image));
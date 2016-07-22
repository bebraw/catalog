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

var _Frame = require('../components/Frame/Frame');

var _Frame2 = _interopRequireDefault(_Frame);

var _Specimen = require('../components/Specimen/Specimen');

var _Specimen2 = _interopRequireDefault(_Specimen);

var _HighlightedCode = require('../components/HighlightedCode/HighlightedCode');

var _HighlightedCode2 = _interopRequireDefault(_HighlightedCode);

var _runscript = require('../utils/runscript');

var _runscript2 = _interopRequireDefault(_runscript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PADDING = 3;
var SIZE = 20;

function getStyle(theme) {
  return {
    container: {
      border: '1px solid #eee',
      borderRadius: '2px',
      boxSizing: 'border-box',
      position: 'relative',
      flexBasis: '100%'
    },
    toggle: {
      border: PADDING + 'px solid transparent',
      color: theme.lightColor,
      cursor: 'pointer',
      display: 'inline-block',
      fontFamily: theme.fontMono,
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 700,
      height: SIZE + 'px',
      lineHeight: SIZE + 'px',
      padding: PADDING + 'px',
      position: 'absolute',
      right: -PADDING + 'px',
      top: -(SIZE + 2 * PADDING) + 'px',
      userSelect: 'none',
      ':hover': {
        color: theme.textColor
      }
    },
    source: {
      borderTop: '1px solid #eee',
      boxSizing: 'border-box',
      width: '100%',
      height: 'auto'
    },
    content: {
      background: 'url(' + theme.checkerboardPatternLight + ')',
      boxSizing: 'border-box',
      display: 'block',
      padding: 20,
      position: 'relative',
      width: '100%'
    },
    light: {
      background: 'url(' + theme.checkerboardPatternLight + ')'
    },
    dark: {
      background: 'url(' + theme.checkerboardPatternDark + ')'
    },
    plain: {
      background: 'transparent',
      padding: 0
    },
    plain_light: {
      background: theme.bgLight,
      padding: '20px'
    },
    plain_dark: {
      background: theme.bgDark,
      padding: '20px'
    }
  };
}

var Html = function (_React$Component) {
  _inherits(Html, _React$Component);

  function Html() {
    _classCallCheck(this, Html);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Html).call(this));

    _this.state = {
      viewSource: false
    };
    return _this;
  }

  _createClass(Html, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var runScript = this.props.runScript;

      if (runScript) {
        Array.from(this.refs.specimen.querySelectorAll('script')).forEach(_runscript2.default);
      }
    }
  }, {
    key: 'toggleSource',
    value: function toggleSource() {
      this.setState({ viewSource: !this.state.viewSource });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var theme = _props.catalog.theme;
      var children = _props.children;
      var frame = _props.frame;

      var options = _objectWithoutProperties(_props, ['catalog', 'children', 'frame']);

      var viewSource = this.state.viewSource;

      var styles = getStyle(theme);
      var exampleStyles = _extends({}, options.plain ? styles.plain : null, options.light ? styles.light : null, options.dark ? styles.dark : null, options.plain && options.light ? styles.plain_light : null, options.plain && options.dark ? styles.plain_dark : null);

      var source = viewSource ? _react2.default.createElement(
        'div',
        { style: styles.source },
        _react2.default.createElement(_HighlightedCode2.default, { language: 'markup', code: children, theme: theme })
      ) : null;

      var toggle = !options.noSource ? _react2.default.createElement(
        'div',
        { style: styles.toggle, onClick: this.toggleSource.bind(this) },
        '<>'
      ) : null;

      var content = _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: children } }); // eslint-disable-line react/no-danger

      return _react2.default.createElement(
        'div',
        { ref: 'specimen', style: styles.container, className: 'cg-Specimen-Html' },
        toggle,
        _react2.default.createElement(
          'div',
          { style: _extends({}, styles.content, exampleStyles) },
          frame ? _react2.default.createElement(
            _Frame2.default,
            null,
            content
          ) : content
        ),
        source
      );
    }
  }]);

  return Html;
}(_react2.default.Component);

Html.propTypes = {
  children: _react.PropTypes.string.isRequired,
  catalog: _CatalogPropTypes.catalogShape.isRequired,
  runScript: _react.PropTypes.bool,
  plain: _react.PropTypes.bool,
  light: _react.PropTypes.bool,
  dark: _react.PropTypes.bool,
  noSource: _react.PropTypes.bool,
  frame: _react.PropTypes.bool
};

exports.default = (0, _Specimen2.default)(undefined, undefined, { withChildren: true })((0, _radium2.default)(Html));
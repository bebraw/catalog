'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CatalogPropTypes = require('../../CatalogPropTypes');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Frame = require('../../components/Frame/Frame');

var _Frame2 = _interopRequireDefault(_Frame);

var _Specimen = require('../../components/Specimen/Specimen');

var _Specimen2 = _interopRequireDefault(_Specimen);

var _HighlightedCode = require('../../components/HighlightedCode/HighlightedCode');

var _HighlightedCode2 = _interopRequireDefault(_HighlightedCode);

var _Hint = require('../../specimens/Hint');

var _Hint2 = _interopRequireDefault(_Hint);

var _reactElementToString = require('./reactElementToString');

var _reactElementToString2 = _interopRequireDefault(_reactElementToString);

var _transformJSX = require('../../utils/transformJSX');

var _transformJSX2 = _interopRequireDefault(_transformJSX);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyle(theme) {
  return {
    container: {
      position: 'relative',
      width: '100%',
      border: '1px solid #eee',
      margin: '0 0 20px 0'
    },
    content: {
      background: 'url(' + theme.checkerboardPatternLight + ')',
      borderRadius: '2px',
      border: 'none',
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
      padding: '0'
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

var ReactSpecimen = function (_Component) {
  _inherits(ReactSpecimen, _Component);

  function ReactSpecimen(props) {
    _classCallCheck(this, ReactSpecimen);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactSpecimen).call(this, props));

    _this.state = {
      elementState: props.state
    };
    _this.setElementState = _this.setElementState.bind(_this);
    return _this;
  }

  _createClass(ReactSpecimen, [{
    key: 'setElementState',
    value: function setElementState(nextState) {
      if (typeof nextState === 'function') {
        this.setState(function (_ref) {
          var elementState = _ref.elementState;
          return { elementState: _extends({}, elementState, nextState(elementState)) };
        });
      } else {
        this.setState({ elementState: _extends({}, this.state.elementState, nextState) });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var _props$catalog = _props.catalog;
      var imports = _props$catalog.page.imports;
      var theme = _props$catalog.theme;
      var children = _props.children;
      var noSource = _props.noSource;
      var frame = _props.frame;

      var options = _objectWithoutProperties(_props, ['catalog', 'children', 'noSource', 'frame']);

      var styles = getStyle(theme);

      var exampleStyles = _extends({}, options.plain ? styles.plain : null, options.light ? styles.light : null, options.dark ? styles.dark : null, options.plain && options.light ? styles.plain_light : null, options.plain && options.dark ? styles.plain_dark : null);

      var jsx = typeof children === 'string';
      var element = null;
      var error = null;
      var code = '';

      if (jsx) {
        var transformed = (0, _transformJSX2.default)(children, _extends({}, imports, {
          state: this.state.elementState,
          setState: this.setElementState
        }));
        element = transformed.element;
        error = transformed.error ? _react2.default.createElement(
          _Hint2.default,
          { warning: true },
          'Couldn\'t render specimen: ' + transformed.error
        ) : null;
        code = children;
      } else {
        element = children;
        code = (0, _reactElementToString2.default)(children);
      }

      return _react2.default.createElement(
        'section',
        { style: styles.container },
        _react2.default.createElement(
          'div',
          { style: _extends({}, styles.content, exampleStyles) },
          error,
          !error && frame ? _react2.default.createElement(
            _Frame2.default,
            null,
            element
          ) : element
        ),
        !noSource && _react2.default.createElement(_HighlightedCode2.default, { language: 'jsx', code: code, theme: theme })
      );
    }
  }]);

  return ReactSpecimen;
}(_react.Component);

ReactSpecimen.propTypes = {
  catalog: _CatalogPropTypes.catalogShape.isRequired,
  children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]).isRequired,
  noSource: _react.PropTypes.bool,
  plain: _react.PropTypes.bool,
  light: _react.PropTypes.bool,
  dark: _react.PropTypes.bool,
  frame: _react.PropTypes.bool,
  state: _react.PropTypes.object
};

exports.default = (0, _Specimen2.default)(undefined, undefined, { withChildren: true })((0, _radium2.default)(ReactSpecimen));
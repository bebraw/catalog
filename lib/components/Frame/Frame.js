'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FrameComponent = require('./FrameComponent');

var _FrameComponent2 = _interopRequireDefault(_FrameComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Frame = function (_Component) {
  _inherits(Frame, _Component);

  function Frame() {
    _classCallCheck(this, Frame);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Frame).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Frame, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var height = this.props.height || this.state.height;
      var autoHeight = this.props.height === void 0;

      var style = {
        width: '100%',
        lineHeight: 0,
        margin: 0,
        padding: 0,
        border: 'none',
        height: height
      };

      return _react2.default.createElement(
        'div',
        { style: { lineHeight: 0 } },
        _react2.default.createElement(
          _FrameComponent2.default,
          {
            style: style,
            frameBorder: '0',
            allowTransparency: 'true',
            scrolling: 'no',
            head: _react2.default.createElement(
              'style',
              null,
              'html,body{margin:0;padding:0;}'
            ),
            onRender: autoHeight ? function (content) {
              var contentHeight = content.offsetHeight;
              if (contentHeight !== height) {
                _this2.setState({ height: contentHeight });
              }
            } : null
          },
          children
        )
      );
    }
  }]);

  return Frame;
}(_react.Component);

exports.default = Frame;


Frame.propTypes = {
  children: _react.PropTypes.element,
  height: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
};
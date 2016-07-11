'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Modified react-frame-component@0.4.0 which supports an onRender callback (e.g. to measure contents);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Original https://github.com/ryanseddon/react-frame-component/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

// eslint-disable-line camelcase


var hasConsole = typeof window !== 'undefined' && window.console;
var noop = function noop() {};
var swallowInvalidHeadWarning = noop;
var resetWarnings = noop;

if (hasConsole) {
  (function () {
    var originalError = console.error; // eslint-disable-line no-console
    // Rendering a <head> into a body is technically invalid although it
    // works. We swallow React's validateDOMNesting warning if that is the
    // message to avoid confusion
    swallowInvalidHeadWarning = function swallowInvalidHeadWarning() {
      console.error = function (msg) {
        // eslint-disable-line no-console
        if (/<head>/.test(msg)) return;
        originalError.call(console, msg);
      };
    };
    resetWarnings = function resetWarnings() {
      console.error = originalError; // eslint-disable-line no-console
    };
  })();
}

var FrameComponent = function (_Component) {
  _inherits(FrameComponent, _Component);

  function FrameComponent() {
    _classCallCheck(this, FrameComponent);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FrameComponent).call(this));

    _this.renderFrameContents = _this.renderFrameContents.bind(_this);
    return _this;
  }

  _createClass(FrameComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderFrameContents();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.renderFrameContents();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var doc = this.iframe.contentDocument;
      if (doc) {
        (0, _reactDom.unmountComponentAtNode)(doc.body);
      }
    }
  }, {
    key: 'renderFrameContents',
    value: function renderFrameContents() {
      var _this2 = this;

      var doc = this.iframe.contentDocument;

      if (doc && doc.readyState === 'complete') {
        var contents = _react2.default.createElement(
          'div',
          null,
          this.props.head,
          this.props.children
        );

        // React warns when you render directly into the body since browser
        // extensions also inject into the body and can mess up React.
        doc.body.innerHTML = '<div></div>';
        doc.head.innerHTML = '';

        var base = doc.createElement('base');
        base.setAttribute('href', window.location.href);
        doc.head.appendChild(base);

        // Clone styles from parent document head into the iframe, so components which use webpack's style-loader get rendered correctly.
        // This doesn't clone any Catalog styles because they are either inline styles or part of the body.
        var pageStyles = Array.from(document.querySelectorAll('head > style'));
        pageStyles.forEach(function (s) {
          doc.head.appendChild(s.cloneNode(true));
        });

        swallowInvalidHeadWarning();
        (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, contents, doc.body.firstChild, function () {
          if (_this2.props.onRender) {
            (0, _raf2.default)(function () {
              _this2.props.onRender(doc.body.firstChild);
            });
          }
        });
        resetWarnings();
      } else {
        setTimeout(this.renderFrameContents, 0);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      // The iframe isn't ready so we drop children from props here. #12, #17
      return _react2.default.createElement('iframe', _extends({ ref: function ref(el) {
          _this3.iframe = el;
        } }, _extends({}, this.props, { children: undefined })));
    }
  }]);

  return FrameComponent;
}(_react.Component);

FrameComponent.propTypes = {
  style: _react.PropTypes.object,
  head: _react.PropTypes.node,
  onRender: _react.PropTypes.func,
  children: _react.PropTypes.node
};

exports.default = FrameComponent;
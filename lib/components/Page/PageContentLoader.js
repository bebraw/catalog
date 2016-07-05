'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CatalogPropTypes = require('../../CatalogPropTypes');

var _Loader = require('./Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _PageRenderer = require('./PageRenderer');

var _PageRenderer2 = _interopRequireDefault(_PageRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageContentLoader = function (_Component) {
  _inherits(PageContentLoader, _Component);

  function PageContentLoader() {
    _classCallCheck(this, PageContentLoader);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PageContentLoader).call(this));

    _this.state = {
      content: null
    };
    return _this;
  }

  _createClass(PageContentLoader, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.fetchPageData(this.context.catalog.page.src);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_, nextContext) {
      if (nextContext.catalog.page.src !== this.context.catalog.page.src) {
        this.setState({ content: null });
        this.fetchPageData(nextContext.catalog.page.src);
      }
    }
  }, {
    key: 'fetchPageData',
    value: function fetchPageData(url) {
      var _this2 = this;

      fetch(url, { credentials: 'same-origin' }).then(function (response) {
        return response.text();
      }).then(function (text) {
        return _this2.setState({ content: text });
      }).catch(function (error) {
        return _this2.setState({
          content: error
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var content = this.state.content || _react2.default.createElement(_Loader2.default, null);
      return _react2.default.createElement(_PageRenderer2.default, { content: content });
    }
  }]);

  return PageContentLoader;
}(_react.Component);

PageContentLoader.contextTypes = {
  catalog: _CatalogPropTypes.catalogShape.isRequired
};

exports.default = PageContentLoader;
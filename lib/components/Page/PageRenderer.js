'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CatalogPropTypes = require('../../CatalogPropTypes');

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _runscript = require('../../utils/runscript');

var _runscript2 = _interopRequireDefault(_runscript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var renderStyles = function renderStyles(styles) {
  return styles.map(function (src, i) {
    return _react2.default.createElement('link', { key: i, href: src, rel: 'stylesheet', type: 'text/css' });
  });
};

var renderContent = function renderContent(content) {
  return _react2.default.isValidElement(content) && content.type === _Page2.default ? content : _react2.default.createElement(
    _Page2.default,
    null,
    content
  );
};

var PageRenderer = function (_Component) {
  _inherits(PageRenderer, _Component);

  function PageRenderer() {
    _classCallCheck(this, PageRenderer);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  PageRenderer.prototype.componentDidMount = function componentDidMount() {
    this.context.catalog.page.scripts.forEach(_runscript2.default);
  };

  PageRenderer.prototype.componentDidUpdate = function componentDidUpdate() {
    this.context.catalog.page.scripts.forEach(_runscript2.default);
  };

  PageRenderer.prototype.render = function render() {
    var content = this.props.content;
    var styles = this.context.catalog.page.styles;

    return _react2.default.createElement(
      'div',
      null,
      renderStyles(styles),
      renderContent(content)
    );
  };

  return PageRenderer;
}(_react.Component);

PageRenderer.propTypes = {
  content: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]).isRequired
};

PageRenderer.contextTypes = {
  catalog: _CatalogPropTypes.catalogShape.isRequired
};

exports.default = PageRenderer;
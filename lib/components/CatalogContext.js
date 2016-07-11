'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createCatalogContext;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('./App/App');

var _App2 = _interopRequireDefault(_App);

var _CatalogPropTypes = require('../CatalogPropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fallbackPathRe = /\*$/;

var CatalogContext = function (_Component) {
  _inherits(CatalogContext, _Component);

  function CatalogContext() {
    _classCallCheck(this, CatalogContext);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CatalogContext).apply(this, arguments));
  }

  _createClass(CatalogContext, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props$configuration = this.props.configuration;
      var inject = _props$configuration.inject;
      var title = _props$configuration.title;
      var theme = _props$configuration.theme;
      var logoSrc = _props$configuration.logoSrc;
      var pages = _props$configuration.pages;
      var pageTree = _props$configuration.pageTree;
      var specimens = _props$configuration.specimens;
      var basePath = _props$configuration.basePath;
      var router = this.context.router;

      return {
        catalog: {
          page: pages.find(function (p) {
            return router.isActive(p.path) || fallbackPathRe.test(p.path);
          }),
          getSpecimen: function getSpecimen(specimen) {
            return specimens[specimen];
          },
          theme: theme,
          inject: inject,
          title: title,
          pages: pages.filter(function (p) {
            return !p.hideFromMenu;
          }),
          pageTree: pageTree,
          basePath: basePath,
          logoSrc: logoSrc
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react.Children.only(children);
    }
  }]);

  return CatalogContext;
}(_react.Component);

CatalogContext.propTypes = {
  configuration: _react.PropTypes.object.isRequired,
  children: _react.PropTypes.element.isRequired
};

CatalogContext.contextTypes = {
  // From react-router
  router: _react.PropTypes.object.isRequired
};

CatalogContext.childContextTypes = {
  catalog: _CatalogPropTypes.catalogShape.isRequired
};

function createCatalogContext(config) {
  var ConfiguredCatalogContext = function ConfiguredCatalogContext(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
      CatalogContext,
      { configuration: config },
      _react2.default.createElement(
        _App2.default,
        null,
        children
      )
    );
  };

  ConfiguredCatalogContext.propTypes = {
    children: _react.PropTypes.element.isRequired
  };

  return ConfiguredCatalogContext;
}
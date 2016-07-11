'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureJSXRoutes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _configure = require('./configure');

var _configure2 = _interopRequireDefault(_configure);

var _warning = require('./utils/warning');

var _warning2 = _interopRequireDefault(_warning);

var _requireModuleDefault = require('./utils/requireModuleDefault');

var _requireModuleDefault2 = _interopRequireDefault(_requireModuleDefault);

var _CatalogContext = require('./components/CatalogContext');

var _CatalogContext2 = _interopRequireDefault(_CatalogContext);

var _PageContentLoader = require('./components/Page/PageContentLoader');

var _PageContentLoader2 = _interopRequireDefault(_PageContentLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pageToRoute = function pageToRoute(_ref) {
  var path = _ref.path;
  var component = _ref.component;
  return {
    component: component ? (0, _requireModuleDefault2.default)(component) : _PageContentLoader2.default,
    path: path
  };
};

var pageToJSXRoute = function pageToJSXRoute(_ref2) {
  var path = _ref2.path;
  var component = _ref2.component;
  return _react2.default.createElement(_reactRouter.Route, { key: path, path: path, component: component ? (0, _requireModuleDefault2.default)(component) : _PageContentLoader2.default });
}; // eslint-disable-line react/prop-types

var autoConfigure = function autoConfigure(config) {
  (0, _warning2.default)(!config.__catalogConfig, 'The `configure` function is deprecated; use `configureRoutes` or `configureJSXRoutes` directly.');

  return config.__catalogConfig ? config : (0, _configure2.default)(config);
};

exports.default = function (config) {
  var finalConfig = autoConfigure(config);
  return {
    component: (0, _CatalogContext2.default)(finalConfig),
    childRoutes: finalConfig.pages.map(pageToRoute)
  };
};

var configureJSXRoutes = exports.configureJSXRoutes = function configureJSXRoutes(config) {
  var finalConfig = autoConfigure(config);
  return _react2.default.createElement(
    _reactRouter.Route,
    { component: (0, _CatalogContext2.default)(finalConfig) },
    finalConfig.pages.map(pageToJSXRoute)
  );
};
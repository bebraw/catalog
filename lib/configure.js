'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = require('./utils/warning');

var _warning2 = _interopRequireDefault(_warning);

var _DefaultTheme = require('./DefaultTheme');

var _DefaultTheme2 = _interopRequireDefault(_DefaultTheme);

var _specimens = require('./specimens');

var _specimens2 = _interopRequireDefault(_specimens);

var _requireModuleDefault = require('./utils/requireModuleDefault');

var _requireModuleDefault2 = _interopRequireDefault(_requireModuleDefault);

var _NotFound = require('./components/Page/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Removes potential multiple slashes from concatenating paths
var removeMultiSlashes = function removeMultiSlashes(path) {
  return path.replace(/\/+/g, '/');
};
var stripTrailingSlashes = function stripTrailingSlashes(path) {
  return path.replace(/\/+$/, '');
};

var has = function has(key) {
  return function (o) {
    return o.hasOwnProperty(key);
  };
};
var hasName = has('name');
var hasTitle = has('title');
var hasSrc = has('src');
var hasPages = has('pages');
var hasComponent = has('component');

var flattenPageTree = function flattenPageTree(pageTree) {
  return pageTree.reduce(function (pages, page) {
    return pages.concat(page.pages ? [page].concat(_toConsumableArray(page.pages)) : [page]);
  }, []).filter(function (page) {
    return page.src || page.component;
  }).map(function (page, index) {
    return _extends({}, page, page.hideFromMenu ? undefined : { index: index });
  });
};

exports.default = function (config) {
  var pageId = 0;
  var basePath = config.basePath || '/';

  var pageReducer = function pageReducer(pages, page) {
    var configStyles = config.styles || [];
    var pageStyles = page.styles || [];
    var configScripts = config.scripts || [];
    var pageScripts = page.scripts || [];

    (0, _warning2.default)(!hasName(page), 'The page configuration property `name` is deprecated; use `path` instead.', page);

    (0, _warning2.default)(hasTitle(page), 'The page configuration property `title` is missing.', page);

    (0, _warning2.default)(!hasSrc(page) || typeof page.src === 'string', 'The page configuration property `src` must be a string.', page);

    (0, _warning2.default)(!hasComponent(page) || typeof (0, _requireModuleDefault2.default)(page.component) === 'function', 'The page configuration property `component` must be a React component.', page);

    (0, _warning2.default)(hasSrc(page) && !hasComponent(page) && !hasPages(page) || !hasSrc(page) && hasComponent(page) && !hasPages(page) || !hasSrc(page) && !hasComponent(page) && hasPages(page), 'The page configuration should (only) have one of these properties: `src`, `component` or `pages`.', page);

    return [].concat(_toConsumableArray(pages), [_extends({}, page, {
      id: ++pageId,
      // Currently, catalog can't be nested inside other page routes, it messes up <Link> matching. Use `basePath`
      path: removeMultiSlashes('/' + stripTrailingSlashes([basePath, page.path || page.name].join('/'))),
      pages: page.pages ? page.pages.reduce(pageReducer, []).map(function (p) {
        return _extends({}, p, { superTitle: page.title });
      }) : null,
      styles: Array.from(new Set([].concat(_toConsumableArray(configStyles), _toConsumableArray(pageStyles)))),
      scripts: Array.from(new Set([].concat(_toConsumableArray(configScripts), _toConsumableArray(pageScripts)))),
      imports: _extends({}, config.imports, page.imports)
    })]);
  };

  var pageTree = config.pages.reduce(pageReducer, []).map(function (p) {
    return _extends({}, p, { superTitle: config.title });
  }).concat({
    path: removeMultiSlashes('/' + stripTrailingSlashes([basePath, '*'].join('/'))),
    id: ++pageId,
    component: _NotFound2.default,
    title: 'Page Not Found',
    superTitle: config.title,
    scripts: [],
    styles: [],
    imports: {},
    hideFromMenu: true
  });
  var pages = flattenPageTree(pageTree);

  return _extends({}, config, {
    // Used to check in configureRoutes() if input is already configured
    __catalogConfig: true,
    theme: _extends({}, _DefaultTheme2.default, config.theme),
    specimens: _extends({}, _specimens2.default, config.specimens),
    basePath: basePath,
    pages: pages,
    pageTree: pageTree
  });
};
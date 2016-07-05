'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _reactDocumentTitle = require('react-document-title');

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _CatalogPropTypes = require('../../CatalogPropTypes');

var _AppLayout = require('./AppLayout');

var _AppLayout2 = _interopRequireDefault(_AppLayout);

var _Menu = require('../Menu/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getDocumentTitle = function getDocumentTitle(_ref) {
  var title = _ref.title;
  var page = _ref.page;
  return title === page.superTitle ? page.superTitle + ' – ' + page.title : title + ' – ' + page.superTitle + ' – ' + page.title;
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _context = this.context;
      var catalog = _context.catalog;
      var history = _context.history;

      return _react2.default.createElement(
        _radium.StyleRoot,
        null,
        _react2.default.createElement(_reactDocumentTitle2.default, {
          title: getDocumentTitle(catalog)
        }),
        _react2.default.createElement(
          _AppLayout2.default,
          _extends({}, catalog, {
            sideNav: _react2.default.createElement(_Menu2.default, _extends({}, catalog, { history: history }))
          }),
          catalog.inject && catalog.inject(),
          _react.Children.only(this.props.children)
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

App.contextTypes = {
  catalog: _CatalogPropTypes.catalogShape.isRequired,
  history: _react.PropTypes.object.isRequired,
  location: _react.PropTypes.object.isRequired
};

App.propTypes = {
  children: _react.PropTypes.element.isRequired
};

exports.default = App;
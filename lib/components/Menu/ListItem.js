'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.style = style;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CatalogPropTypes = require('../../CatalogPropTypes');

var _Link = require('../Link/Link');

var _Link2 = _interopRequireDefault(_Link);

var _NestedList = require('./NestedList');

var _NestedList2 = _interopRequireDefault(_NestedList);

var _typography = require('../../styles/typography');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function style(theme) {
  var pseudo = {
    color: theme.sidebarColorTextActive,
    textDecoration: 'none',
    background: 'rgba(255,255,255,0.1)'
  };
  return {
    link: _extends({}, (0, _typography.text)(theme), {
      borderTop: '1px solid ' + theme.sidebarColorLine,
      color: theme.sidebarColorText,
      cursor: 'pointer',
      display: 'block',
      margin: 0,
      padding: '16px 40px',
      textDecoration: 'none',
      ':hover': pseudo,
      ':active': pseudo
    }),
    activeLink: {
      color: theme.sidebarColorTextActive
    },
    nestedLink: {
      borderTop: 'none',
      borderBottom: 'none',
      padding: '0 24px 16px 60px'
    },
    nestedChildren: {
      borderTop: 'none',
      borderBottom: 'none',
      color: theme.sidebarColorText,
      cursor: 'pointer',
      display: 'block',
      margin: 0,
      padding: '15px 40px',
      textDecoration: 'none'
    }
  };
}

var ListItem = function (_React$Component) {
  _inherits(ListItem, _React$Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var page = _props.page;
      var theme = _props.theme;
      var nested = _props.nested;
      var path = page.path;
      var pages = page.pages;
      var title = page.title;
      var menuTitle = page.menuTitle;
      var props = page.props;


      var currentStyle = style(theme);

      var defaultStyle = nested ? _extends({}, currentStyle.link, currentStyle.nestedLink) : _extends({}, currentStyle.link);

      return _react2.default.createElement(
        'li',
        { style: props && props.style },
        pages ? _react2.default.createElement(_NestedList2.default, _extends({}, this.props, props, page, { pages: pages })) : _react2.default.createElement(
          _Link2.default,
          _extends({}, props, {
            style: defaultStyle,
            activeStyle: currentStyle.activeLink,
            to: path,
            onlyActiveOnIndex: path === '/'
          }),
          menuTitle || title
        )
      );
    }
  }]);

  return ListItem;
}(_react2.default.Component);

ListItem.propTypes = {
  page: _CatalogPropTypes.pageShape.isRequired,
  theme: _react.PropTypes.object.isRequired,
  nested: _react.PropTypes.bool,
  history: _react.PropTypes.object.isRequired
};

exports.default = ListItem;
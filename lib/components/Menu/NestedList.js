'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CatalogPropTypes = require('../../CatalogPropTypes');

var _Link = require('../Link/Link');

var _Link2 = _interopRequireDefault(_Link);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _Menu = require('./Menu');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NestedList = _react2.default.createClass({
  displayName: 'NestedList',

  propTypes: {
    pages: _CatalogPropTypes.pagesShape.isRequired,
    title: _react.PropTypes.string.isRequired,
    theme: _react.PropTypes.object.isRequired,
    history: _react.PropTypes.object.isRequired
  },
  contextTypes: {
    router: _react.PropTypes.object.isRequired
  },
  render: function render() {
    var _this = this;

    var _props = this.props;
    var theme = _props.theme;
    var pages = _props.pages;
    var title = _props.title;
    var history = _props.history;

    var collapsed = !pages.map(function (d) {
      return d.path && _this.context.router.isActive(d.path);
    }).filter(Boolean).length;

    var currentStyle = _extends({}, (0, _Menu.style)(theme), (0, _ListItem.style)(theme));

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Link2.default,
        {
          to: pages[0].path,
          style: _extends({}, currentStyle.link, collapsed ? {} : currentStyle.activeLink),
          activeStyle: _extends({}, currentStyle.link, currentStyle.activeLink) },
        title
      ),
      !collapsed && _react2.default.createElement(
        'ul',
        { style: _extends({}, currentStyle.list, currentStyle.listNested, { padding: 0 }) },
        pages.map(function (page) {
          return _react2.default.createElement(_ListItem2.default, { history: history, key: page.id, page: page, nested: true, theme: theme });
        })
      )
    );
  }
});

exports.default = (0, _radium2.default)(NestedList);
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

var _typography = require('../../styles/typography');

var _Link = require('../Link/Link');

var _Link2 = _interopRequireDefault(_Link);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function style(theme) {
  return {
    bar: {
      background: theme.sidebarColor,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    h1: _extends({}, (0, _typography.heading)(theme, 1), {
      boxSizing: 'border-box',
      color: theme.sidebarColorHeading,
      fontWeight: 700,
      margin: 0,
      padding: theme.sizeL + 'px ' + theme.sizeXxl + 'px',
      height: theme.pageHeadingHeight,
      display: 'flex',
      alignItems: 'flex-end'
    }),
    logo: {
      maxWidth: '100%',
      marginBottom: (0, _typography.getFontSize)(theme, 5)
    },
    list: {
      borderBottom: '1px solid ' + theme.sidebarColorLine,
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    listNested: {
      borderTop: 'none',
      borderBottom: 'none',
      padding: '0 0 15px 40px'
    },
    info: _extends({}, (0, _typography.text)(theme, -1), {
      padding: 20,
      color: theme.lightColor
    }),
    link: {
      color: theme.lightColor
    }
  };
}

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var theme = _props.theme;
      var pageTree = _props.pageTree;
      var logoSrc = _props.logoSrc;
      var title = _props.title;
      var history = _props.history;
      var basePath = _props.basePath;


      var currentStyle = style(theme);

      var titleString = title ? title : '';

      return _react2.default.createElement(
        'div',
        { style: currentStyle.bar },
        _react2.default.createElement(
          'div',
          { style: { flex: 1 } },
          _react2.default.createElement(
            _Link2.default,
            { to: basePath, style: { textDecoration: 'none' } },
            _react2.default.createElement(
              'h1',
              { style: currentStyle.h1 },
              logoSrc ? _react2.default.createElement('img', { style: currentStyle.logo, src: logoSrc }) : _react2.default.createElement(
                'div',
                { style: currentStyle.logo },
                titleString
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { style: currentStyle.list },
            pageTree.filter(function (page) {
              return !page.hideFromMenu;
            }).map(function (page) {
              return _react2.default.createElement(_ListItem2.default, { key: page.id, page: page, theme: theme, history: history });
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { style: currentStyle.info },
          'Powered by ',
          _react2.default.createElement(
            'a',
            { style: currentStyle.link, href: 'http://interactivethings.github.io/catalog', target: '_blank' },
            'Catalog'
          )
        )
      );
    }
  }]);

  return Menu;
}(_react2.default.Component);

Menu.propTypes = {
  pageTree: _CatalogPropTypes.pagesShape.isRequired,
  theme: _react.PropTypes.object.isRequired,
  logoSrc: _react.PropTypes.string,
  history: _react.PropTypes.object.isRequired,
  basePath: _react.PropTypes.string,
  title: _react.PropTypes.string
};

Menu.defaultProps = {
  styles: [],
  scripts: []
};

exports.default = Menu;
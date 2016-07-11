'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _CatalogPropTypes = require('../../CatalogPropTypes');

var _NavigationBar = require('./NavigationBar');

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _PageHeader = require('../Page/PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SIDEBAR_WIDTH = 251;
var SIDEBAR_ANIMATION_DURATION = 0.25;

var globalStyle = '\n@import url(https://fonts.googleapis.com/css?family=Roboto:400,700,400italic);\n@import url(https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700);\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n';

var MenuIcon = function MenuIcon(props) {
  return _react2.default.createElement(
    'svg',
    _extends({}, props, { width: '27px', height: '20px', viewBox: '0 0 27 20' }),
    _react2.default.createElement(
      'g',
      { fill: '#FFFFFF' },
      _react2.default.createElement('rect', { x: '0', y: '16', width: '26', height: '4' }),
      _react2.default.createElement('rect', { x: '0', y: '8', width: '26', height: '4' }),
      _react2.default.createElement('rect', { x: '0', y: '0', width: '26', height: '4' })
    )
  );
};

var getStyles = function getStyles(theme, sidebarVisible) {
  return {
    container: {
      background: theme.background,
      margin: 0,
      padding: 0,
      width: '100%',
      height: '100%',
      position: 'relative',
      // Prevent flash of un-media-queried content by Radium
      display: 'none',
      '@media (min-width: 0px)': {
        display: 'block'
      }
    },
    menuIcon: {
      cursor: 'pointer',
      height: 30,
      left: 20,
      position: 'absolute',
      top: 20,
      width: 30
    },
    sideNav: {
      background: theme.sidebarColor,
      color: '#fff',
      overflowY: 'auto',
      position: 'fixed',
      height: '100vh',
      width: SIDEBAR_WIDTH - 1,
      top: 0,
      borderRight: '1px solid ' + theme.sidebarColorLine,
      transform: 'translateX(' + (sidebarVisible ? 0 : -SIDEBAR_WIDTH) + 'px)',
      transition: 'transform ' + SIDEBAR_ANIMATION_DURATION + 's ease-in-out',
      WebkitOverflowScrolling: 'touch',
      '@media (min-width: 1000px)': {
        transform: 'translateX(0px)',
        transition: 'none'
      }
    },
    navBackground: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      opacity: sidebarVisible ? 1 : 0,
      visibility: sidebarVisible ? 'visible' : 'hidden',
      transition: 'opacity ' + SIDEBAR_ANIMATION_DURATION + 's, visibility ' + SIDEBAR_ANIMATION_DURATION + 's',
      '@media (min-width: 1000px)': {
        display: 'none'
      }
    },
    content: {
      boxSizing: 'border-box',
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
      position: 'relative',
      '@media (min-width: 1000px)': {
        marginLeft: SIDEBAR_WIDTH
      }
    }
  };
};

var AppLayout = function (_React$Component) {
  _inherits(AppLayout, _React$Component);

  function AppLayout() {
    _classCallCheck(this, AppLayout);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AppLayout).call(this));

    _this.toggleSidebar = _this.toggleSidebar.bind(_this);
    _this.state = {
      sidebarVisible: false
    };
    return _this;
  }

  _createClass(AppLayout, [{
    key: 'toggleSidebar',
    value: function toggleSidebar(e) {
      e.preventDefault();
      this.setState({
        sidebarVisible: !this.state.sidebarVisible
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var theme = _props.theme;
      var pages = _props.pages;
      var page = _props.page;
      var sidebarVisible = this.state.sidebarVisible;


      var styles = getStyles(this.props.theme, sidebarVisible);

      var nextPage = pages[page.index + 1];
      var previousPage = pages[page.index - 1];

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          'style',
          null,
          globalStyle
        ),
        _react2.default.createElement(
          'div',
          { style: styles.content },
          _react2.default.createElement(_PageHeader2.default, { theme: theme, title: page.title, superTitle: page.superTitle }),
          _react2.default.createElement(
            'div',
            { style: { flex: 1 } },
            this.props.children
          ),
          !page.hideFromMenu && _react2.default.createElement(_NavigationBar2.default, { theme: theme, nextPage: nextPage, previousPage: previousPage })
        ),
        _react2.default.createElement(MenuIcon, { style: styles.menuIcon, onClick: this.toggleSidebar, onTouchEnd: this.toggleSidebar }),
        _react2.default.createElement('div', { style: styles.navBackground, onClick: this.toggleSidebar, onTouchEnd: this.toggleSidebar }),
        _react2.default.createElement(
          'div',
          { style: styles.sideNav },
          this.props.sideNav
        )
      );
    }
  }]);

  return AppLayout;
}(_react2.default.Component);

AppLayout.propTypes = {
  sideNav: _react.PropTypes.node,
  children: _react.PropTypes.node,
  theme: _react.PropTypes.object.isRequired,
  page: _CatalogPropTypes.pageShape.isRequired,
  pages: _CatalogPropTypes.pagesShape.isRequired
};

exports.default = (0, _radium2.default)(AppLayout);
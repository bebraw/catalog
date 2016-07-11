'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _CatalogPropTypes = require('../../CatalogPropTypes');

var _Link = require('../Link/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyles(theme) {
  return {
    navbar: {
      width: '100%',
      backgroundColor: theme.bgLight
    },
    navlink: {
      boxSizing: 'border-box',
      display: 'inline-block',
      verticalAlign: 'top',
      width: '50%',
      transition: '.2s background',
      ':hover': {
        background: theme.lightColor
      }
    },
    leftNavLink: {
      padding: theme.sizeXl + 'px 0 ' + theme.sizeXl + 'px ' + theme.sizeL + 'px',
      textAlign: 'left',
      '@media (min-width: 1000px)': {
        padding: theme.sizeXl + 'px 0 ' + theme.sizeXl + 'px ' + theme.sizeL * 2 + 'px'
      }
    },
    rightNavLink: {
      padding: theme.sizeXl + 'px ' + theme.sizeL + 'px ' + theme.sizeXl + 'px 0',
      textAlign: 'right',
      borderLeft: '1px solid ' + theme.background,
      '@media (min-width: 1000px)': {
        padding: theme.sizeXl + 'px ' + theme.sizeL * 2 + 'px ' + theme.sizeXl + 'px 0'
      }
    },
    link: {
      color: theme.brandColor,
      display: 'block',
      fontFamily: theme.fontFamily,
      textDecoration: 'none'
    },
    leftLinkIcon: {
      display: 'none',
      margin: '0 24px 0 0',
      verticalAlign: 'middle',
      '@media (min-width: 1000px)': {
        display: 'inline'
      }
    },
    rightLinkIcon: {
      display: 'none',
      margin: '0 0 0 24px',
      verticalAlign: 'middle',
      '@media (min-width: 1000px)': {
        display: 'inline'
      }
    },
    linkIconPath: {
      stroke: 'none',
      fill: theme.brandColor
    },
    linklabels: {
      display: 'block',
      verticalAlign: 'middle',
      '@media (min-width: 1000px)': {
        display: 'inline-block'
      }
    },
    linkSuperTitle: {
      fontSize: theme.fontM,
      margin: 0,
      fontWeight: 400
    },
    linkTitle: {
      fontSize: theme.fontL,
      margin: 0,
      fontWeight: 400
    }
  };
}

var NavigationBar = function (_React$Component) {
  _inherits(NavigationBar, _React$Component);

  function NavigationBar() {
    _classCallCheck(this, NavigationBar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NavigationBar).apply(this, arguments));
  }

  _createClass(NavigationBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var nextPage = _props.nextPage;
      var previousPage = _props.previousPage;
      var theme = _props.theme;


      var styles = getStyles(theme);

      var leftIcon = _react2.default.createElement(
        'svg',
        { style: styles.leftLinkIcon, width: '37px', height: '26px', viewBox: '0 0 37 26' },
        _react2.default.createElement('path', { style: styles.linkIconPath, d: 'M12.2925,0.2925 C12.6845,-0.0975 13.3165,-0.0975 13.7085,0.2925 C14.0985,0.6845 14.0985,1.3165 13.7085,1.7085 L3.4145,12.0005 L36.0005,12.0005 C36.5525,12.0005 37.0005,12.4485 37.0005,13.0005 C37.0005,13.5525 36.5525,14.0005 36.0005,14.0005 L3.4145,14.0005 L13.7085,24.2925 C14.0985,24.6845 14.0985,25.3165 13.7085,25.7085 C13.5125,25.9025 13.2565,26.0005 13.0005,26.0005 C12.7445,26.0005 12.4885,25.9025 12.2925,25.7085 L0.2925,13.7085 C-0.0975,13.3165 -0.0975,12.6845 0.2925,12.2925 L12.2925,0.2925 Z' })
      );
      var rightIcon = _react2.default.createElement(
        'svg',
        { style: styles.rightLinkIcon, width: '37px', height: '26px', viewBox: '0 0 37 26' },
        _react2.default.createElement('path', { style: styles.linkIconPath, d: 'M24.708,0.2925 C24.316,-0.0975 23.684,-0.0975 23.292,0.2925 C22.902,0.6845 22.902,1.3165 23.292,1.7085 L33.586,12.0005 L1,12.0005 C0.448,12.0005 0,12.4485 0,13.0005 C0,13.5525 0.448,14.0005 1,14.0005 L33.586,14.0005 L23.292,24.2925 C22.902,24.6845 22.902,25.3165 23.292,25.7085 C23.488,25.9025 23.744,26.0005 24,26.0005 C24.256,26.0005 24.512,25.9025 24.708,25.7085 L36.708,13.7085 C37.098,13.3165 37.098,12.6845 36.708,12.2925 L24.708,0.2925 Z' })
      );

      return _react2.default.createElement(
        'div',
        { style: styles.navbar },
        _react2.default.createElement(
          'div',
          { style: styles.navlink, key: 'left' },
          previousPage && _react2.default.createElement(
            _Link2.default,
            { to: previousPage.path, style: _extends({}, styles.link, styles.leftNavLink) },
            leftIcon,
            _react2.default.createElement(
              'div',
              { style: styles.linklabels },
              _react2.default.createElement(
                'h4',
                { style: styles.linkSuperTitle },
                previousPage.superTitle
              ),
              _react2.default.createElement(
                'h3',
                { style: styles.linkTitle },
                previousPage.title
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { style: styles.navlink, key: 'right' },
          nextPage && _react2.default.createElement(
            _Link2.default,
            { to: nextPage.path, style: _extends({}, styles.link, styles.rightNavLink) },
            _react2.default.createElement(
              'div',
              { style: styles.linklabels },
              _react2.default.createElement(
                'h4',
                { style: styles.linkSuperTitle },
                nextPage.superTitle
              ),
              _react2.default.createElement(
                'h3',
                { style: styles.linkTitle },
                nextPage.title
              )
            ),
            rightIcon
          )
        )
      );
    }
  }]);

  return NavigationBar;
}(_react2.default.Component);

NavigationBar.propTypes = {
  theme: _react.PropTypes.object.isRequired,
  nextPage: _CatalogPropTypes.pageShape,
  previousPage: _CatalogPropTypes.pageShape
};

exports.default = (0, _radium2.default)(NavigationBar);
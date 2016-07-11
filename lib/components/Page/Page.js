'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CatalogPropTypes = require('../../CatalogPropTypes');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _typography = require('../../styles/typography');

var _renderMarkdown = require('../../utils/renderMarkdown');

var _renderMarkdown2 = _interopRequireDefault(_renderMarkdown);

var _seqKey = require('../../utils/seqKey');

var _seqKey2 = _interopRequireDefault(_seqKey);

var _MarkdownSpecimen = require('../Specimen/MarkdownSpecimen');

var _MarkdownSpecimen2 = _interopRequireDefault(_MarkdownSpecimen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Page).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _context$catalog = this.context.catalog;
      var theme = _context$catalog.theme;
      var getSpecimen = _context$catalog.getSpecimen;


      var pageStyle = {
        boxSizing: 'border-box',
        margin: '0 20px 0 20px',
        maxWidth: '64em',
        display: 'flex',
        flexFlow: 'row wrap',
        padding: '48px 0',
        '@media (min-width: 640px)': {
          margin: '0 10px 0 20px'
        },
        '@media (min-width: 1000px)': {
          margin: '0 30px 0 40px'
        }
      };

      var getSpecimenKey = (0, _seqKey2.default)('Specimen');

      return _react2.default.createElement(
        'div',
        { className: 'cg-Page', style: pageStyle },
        _react2.default.Children.map(children, function (child) {
          return typeof child === 'string' ? (0, _renderMarkdown2.default)({
            text: child,
            renderer: {
              code: function code(body, options) {
                return _react2.default.createElement(_MarkdownSpecimen2.default, { key: getSpecimenKey(), body: body, options: options || '', getSpecimen: getSpecimen });
              }
            }
          }) : child;
        }),
        _react2.default.createElement(_radium.Style, { scopeSelector: '.cg-Page >', rules: _extends({}, (0, _typography.headingBlock)(theme, 'h1', 4), (0, _typography.headingBlock)(theme, 'h2', 3), (0, _typography.headingBlock)(theme, 'h3', 2), (0, _typography.headingBlock)(theme, 'h4', 1), (0, _typography.headingBlock)(theme, 'h5'), (0, _typography.headingBlock)(theme, 'h6'), (0, _typography.textBlock)(theme, 'p'), (0, _typography.unorderedList)(theme, 'ul'), (0, _typography.orderedList)(theme, 'ol'), {
            hr: {
              border: 'none',
              flexBasis: '100%',
              margin: 0,
              height: 0
            }

          }, (0, _typography.blockquote)(theme), (0, _typography.headingBlock)(theme, 'blockquote > h1', 4), (0, _typography.headingBlock)(theme, 'blockquote > h2', 3), (0, _typography.headingBlock)(theme, 'blockquote > h3', 2), (0, _typography.headingBlock)(theme, 'blockquote > h4', 1), (0, _typography.headingBlock)(theme, 'blockquote > h5', 1), (0, _typography.headingBlock)(theme, 'blockquote > h6', 1), (0, _typography.textBlock)(theme, 'blockquote > p', 1), (0, _typography.unorderedList)(theme, 'blockquote > ul', 1), (0, _typography.orderedList)(theme, 'blockquote > ol', 1), {

            ':first-child': {
              marginTop: 0
            }
          }) })
      );
    }
  }]);

  return Page;
}(_react.Component);

Page.propTypes = {
  children: _react.PropTypes.node
};

Page.contextTypes = {
  catalog: _CatalogPropTypes.catalogShape.isRequired
};

exports.default = (0, _radium2.default)(Page);
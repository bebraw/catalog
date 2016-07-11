'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CatalogPropTypes = require('../CatalogPropTypes');

var _Specimen = require('../components/Specimen/Specimen');

var _Specimen2 = _interopRequireDefault(_Specimen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyle(theme) {
  return {
    container: {
      background: '#fff',
      width: '100%',
      textRendering: 'initial',
      WebkitFontSmoothing: 'initial',
      MozOsxFontSmoothing: 'initial',
      display: 'flex'
    },
    wrapper: {
      padding: '10px 20px',
      boxSizing: 'border-box',
      width: '100%'
    },
    title: {
      fontFamily: theme.fontMono,
      opacity: 0.4,
      margin: '10px 0'
    },
    heading: {
      maxWidth: '100%',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    kerning: {
      textRendering: 'optimizeLegibility'
    },
    smoothing: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    },
    list: {
      listStyleType: 'none',
      paddingLeft: 0,
      marginLeft: 0
    }
  };
}

var lorem = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim.';
var kafka = 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. It wasn\'t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather.';

var Type = function (_React$Component) {
  _inherits(Type, _React$Component);

  function Type() {
    _classCallCheck(this, Type);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Type).apply(this, arguments));
  }

  _createClass(Type, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var theme = _props.catalog.theme;

      var options = _objectWithoutProperties(_props, ['catalog']);

      var styles = getStyle(theme);

      // check if a shorter paragraph should is demanded
      var truncate = options.shorter ? 100 : null;
      // check if alternate dummy text is set
      var dummyText = options.kafka ? kafka : lorem;
      // check if the modifier demands kerning
      var kerning = options.kern ? styles.kerning : null;
      // check if the modifier demands font smoothing
      var smoothing = options.smoothen ? styles.smoothing : null;
      // Use single word or sentence for headlines
      var headlineText = options.single ? 'Hamburgefonstiv' : 'The quick brown fox jumps over the lazy dog';

      var fontColor = options.color ? { color: options.color } : null;
      var isItalic = options.style ? options.style : 'normal';
      var fontFamily = options.font ? options.font : 'inherit';
      var backgroundColor = options.background ? { backgroundColor: options.background } : null;
      var fontWeight = options.weight ? options.weight : 'normal';
      var letterSpacing = options.tracking ? { letterSpacing: options.tracking } : null;
      var backgroundImage = options.image ? { backgroundImage: 'url(' + options.image + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' } : null;

      var description = _react2.default.createElement(
        'ul',
        { style: _extends({}, styles.title, styles.list, fontColor) },
        options.color ? _react2.default.createElement(
          'li',
          { style: styles.list },
          'color: ',
          options.color + ';'
        ) : null,
        options.background ? _react2.default.createElement(
          'li',
          { style: styles.list },
          'background-color: ',
          options.background + ';'
        ) : null,
        fontWeight !== 'normal' ? _react2.default.createElement(
          'li',
          { style: styles.list },
          'font-weight: ',
          options.weight + ';'
        ) : null,
        isItalic !== 'normal' ? _react2.default.createElement(
          'li',
          { style: styles.list },
          'font-style: ',
          options.style + ';'
        ) : null,
        letterSpacing ? _react2.default.createElement(
          'li',
          { style: styles.list },
          'letter-spacing: ',
          options.tracking + ';'
        ) : null
      );

      var headings = options.headings ? options.headings.map(function (heading, i) {
        var isPixel = typeof heading === 'number' ? 'px' : '';
        return _react2.default.createElement(
          'div',
          { key: i },
          _react2.default.createElement(
            'div',
            { style: _extends({}, styles.title, fontColor) },
            'h',
            i + 1,
            ' (',
            heading + isPixel,
            ')'
          ),
          _react2.default.createElement(
            'div',
            { style: _extends({}, styles.heading, letterSpacing, { font: isItalic + ' normal ' + fontWeight + ' ' + (heading + isPixel) + ' ' + fontFamily }) },
            headlineText
          )
        );
      }) : null;

      var paragraphs = options.paragraphs ? options.paragraphs.map(function (paragraph, i) {
        var values = paragraph.split('/').map(function (item) {
          return (/[a-z]/i.test(item) ? '' + item : item + 'px'
          );
        }).join('/');
        return _react2.default.createElement(
          'div',
          { key: i },
          _react2.default.createElement(
            'div',
            { style: _extends({}, styles.title, fontColor) },
            'Paragraph (',
            values,
            ')'
          ),
          _react2.default.createElement(
            'div',
            { style: _extends({}, styles.paragraph, letterSpacing, { font: isItalic + ' normal ' + fontWeight + ' ' + values + ' ' + fontFamily }) },
            truncate ? dummyText.substring(0, 200) + '…' : dummyText
          )
        );
      }) : null;

      return _react2.default.createElement(
        'section',
        { style: styles.container },
        _react2.default.createElement(
          'div',
          { style: _extends({}, styles.wrapper, kerning, smoothing, fontColor, backgroundColor, backgroundImage) },
          headings,
          headings && paragraphs ? _react2.default.createElement('br', null) : null,
          paragraphs,
          description
        )
      );
    }
  }]);

  return Type;
}(_react2.default.Component);

Type.propTypes = {
  shorter: _react.PropTypes.bool,
  kafka: _react.PropTypes.bool,
  kern: _react.PropTypes.bool,
  smoothen: _react.PropTypes.bool,
  single: _react.PropTypes.bool,
  color: _react.PropTypes.string,
  style: _react.PropTypes.string,
  font: _react.PropTypes.string,
  background: _react.PropTypes.string,
  weight: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  tracking: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  image: _react.PropTypes.string,
  headings: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])),
  paragraphs: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])),
  catalog: _CatalogPropTypes.catalogShape.isRequired
};

exports.default = (0, _Specimen2.default)()(Type);
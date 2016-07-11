'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Hint = require('../../specimens/Hint');

var _Hint2 = _interopRequireDefault(_Hint);

var _parseSpecimenType = require('../../utils/parseSpecimenType');

var _parseSpecimenType2 = _interopRequireDefault(_parseSpecimenType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getUnknownSpecimen = function getUnknownSpecimen(specimenType) {
  return function () {
    return _react2.default.createElement(
      _Hint2.default,
      { warning: true },
      'Unknown Specimen: **' + specimenType + '**'
    );
  };
};

var MarkdownSpecimen = function (_Component) {
  _inherits(MarkdownSpecimen, _Component);

  function MarkdownSpecimen() {
    _classCallCheck(this, MarkdownSpecimen);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MarkdownSpecimen).apply(this, arguments));
  }

  _createClass(MarkdownSpecimen, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var options = _props.options;
      var body = _props.body;
      var getSpecimen = _props.getSpecimen;

      var specimenType = (0, _parseSpecimenType2.default)(options);
      var Specimen = getSpecimen(specimenType) || getUnknownSpecimen(specimenType);

      return _react2.default.createElement(Specimen, { rawOptions: options, rawBody: body });
    }
  }]);

  return MarkdownSpecimen;
}(_react.Component);

exports.default = MarkdownSpecimen;


MarkdownSpecimen.propTypes = {
  body: _react.PropTypes.string.isRequired,
  options: _react.PropTypes.string.isRequired,
  getSpecimen: _react.PropTypes.func.isRequired
};
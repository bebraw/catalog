'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Higher-order Specimen which provides theme

exports.default = Specimen;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CatalogPropTypes = require('../../CatalogPropTypes');

var _Span = require('./Span');

var _Span2 = _interopRequireDefault(_Span);

var _parseSpecimenOptions = require('../../utils/parseSpecimenOptions');

var _parseSpecimenOptions2 = _interopRequireDefault(_parseSpecimenOptions);

var _parseSpecimenBody = require('../../utils/parseSpecimenBody');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Specimen(mapBodyToProps, mapOptionsToProps) {
  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var parseOptions = (0, _parseSpecimenOptions2.default)(mapOptionsToProps);
  var parseBody = options.withChildren ? (0, _parseSpecimenBody.parseSpecimenBody)(mapBodyToProps) : (0, _parseSpecimenBody.parseSpecimenYamlBody)(mapBodyToProps);

  return function (WrappedSpecimen) {
    var SpecimenContainer = function SpecimenContainer(props, _ref) {
      var catalog = _ref.catalog;
      var rawOptions = props.rawOptions;
      var rawBody = props.rawBody;

      var optionProps = parseOptions(rawOptions);
      var bodyProps = parseBody(rawBody);
      var span = props.span || bodyProps.span || optionProps.span;

      return _react2.default.createElement(
        _Span2.default,
        { span: span },
        _react2.default.createElement(WrappedSpecimen, _extends({}, optionProps, bodyProps, props, { catalog: catalog }))
      );
    };

    SpecimenContainer.propTypes = {
      span: _react.PropTypes.number,
      rawBody: _react.PropTypes.string,
      rawOptions: _react.PropTypes.string
    };

    SpecimenContainer.contextTypes = {
      catalog: _CatalogPropTypes.catalogShape.isRequired
    };

    return SpecimenContainer;
  };
}
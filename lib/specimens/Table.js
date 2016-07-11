'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CatalogPropTypes = require('../CatalogPropTypes');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Specimen = require('../components/Specimen/Specimen');

var _Specimen2 = _interopRequireDefault(_Specimen);

var _typography = require('../styles/typography');

var _renderMarkdown = require('../utils/renderMarkdown');

var _renderMarkdown2 = _interopRequireDefault(_renderMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyle(theme) {
  return {
    container: {
      flexBasis: '100%',
      overflow: 'scroll',
      paddingBottom: '10px'
    },
    table: _extends({}, (0, _typography.text)(theme), {
      borderCollapse: 'collapse',
      lineHeight: 'auto',
      width: '100%',
      borderBottom: 'none'
    }),
    tableRow: {
      borderBottom: '1px solid ' + theme.sidebarColorLine
    },
    head: {
      color: theme.sidebarColorHeading,
      fontWeigth: 'bold',
      borderBottom: '2px solid ' + theme.lightColor
    },
    cell: {
      padding: '0px 0px',
      textAlign: 'left'
    }
  };
}

var Cell = function Cell(value, id, style, heading) {
  var content = typeof value === 'string' ? (0, _renderMarkdown2.default)({ text: value }) : value || _react2.default.createElement(
    'p',
    { style: { opacity: 0.2 } },
    '—'
  );
  return heading ? _react2.default.createElement(
    'th',
    { key: id, style: style },
    content
  ) : _react2.default.createElement(
    'td',
    { key: id, style: style },
    content
  );
};

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Table).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var columns = _props.columns;
      var rows = _props.rows;
      var theme = _props.catalog.theme;

      var _getStyle = getStyle(theme);

      var cell = _getStyle.cell;
      var container = _getStyle.container;
      var table = _getStyle.table;
      var head = _getStyle.head;
      var tableRow = _getStyle.tableRow;

      var tableKeys = columns ? columns : rows.reduce(function (index, row) {
        return index.concat(Object.keys(row));
      }, []).filter(function (value, i, self) {
        return self.indexOf(value) === i;
      });
      return _react2.default.createElement(
        'section',
        { style: container },
        _react2.default.createElement(
          'table',
          { style: table },
          _react2.default.createElement(
            'thead',
            { style: head },
            _react2.default.createElement(
              'tr',
              null,
              tableKeys.map(function (key, i) {
                return Cell(key, i, cell, true);
              })
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            rows.map(function (row, i) {
              return _react2.default.createElement(
                'tr',
                { style: tableRow, key: i },
                tableKeys.map(function (key, k) {
                  return Cell(row[key], k, cell, false);
                })
              );
            })
          )
        )
      );
    }
  }]);

  return Table;
}(_react2.default.Component);

Table.propTypes = {
  catalog: _CatalogPropTypes.catalogShape.isRequired,
  rows: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
  columns: _react.PropTypes.arrayOf(_react.PropTypes.string)
};

Table.defaultProps = {};
exports.default = (0, _Specimen2.default)(undefined, undefined, { withChildren: false })((0, _radium2.default)(Table));
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _history = require('history');

var _reactRouterScroll = require('react-router-scroll');

var _reactRouterScroll2 = _interopRequireDefault(_reactRouterScroll);

var _seqKey = require('../utils/seqKey');

var _seqKey2 = _interopRequireDefault(_seqKey);

var _configureRoutes = require('../configureRoutes');

var _configureRoutes2 = _interopRequireDefault(_configureRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hashHistory = (0, _reactRouter.useRouterHistory)(_history.createHashHistory)({ queryKey: false });

var Catalog = function (_Component) {
  _inherits(Catalog, _Component);

  function Catalog() {
    _classCallCheck(this, Catalog);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Catalog).call(this));

    _this.getKey = (0, _seqKey2.default)('CatalogRouter');
    _this.state = {
      routerKey: _this.getKey()
    };
    return _this;
  }

  _createClass(Catalog, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setState({
        routerKey: this.getKey()
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var useBrowserHistory = _props.useBrowserHistory;

      var configuration = _objectWithoutProperties(_props, ['useBrowserHistory']);

      var routerKey = this.state.routerKey;

      return _react2.default.createElement(_reactRouter.Router, {
        key: routerKey,
        history: useBrowserHistory ? _reactRouter.browserHistory : hashHistory,
        routes: (0, _configureRoutes2.default)(configuration),
        render: (0, _reactRouter.applyRouterMiddleware)((0, _reactRouterScroll2.default)())
      });
    }
  }]);

  return Catalog;
}(_react.Component);

exports.default = Catalog;


Catalog.propTypes = {
  useBrowserHistory: _react.PropTypes.bool
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.catalogShape = exports.pagesShape = exports.pageShape = undefined;

var _react = require('react');

var pageShape = exports.pageShape = _react.PropTypes.shape({
  title: _react.PropTypes.string.isRequired,
  id: _react.PropTypes.number.isRequired,
  index: _react.PropTypes.number,
  path: _react.PropTypes.string,
  src: _react.PropTypes.string,
  pages: _react.PropTypes.array, // should be arrayOf(page) but that doesn't work
  styles: _react.PropTypes.array.isRequired,
  scripts: _react.PropTypes.array.isRequired,
  imports: _react.PropTypes.object.isRequired,
  hideFromMenu: _react.PropTypes.boolean
});

var pagesShape = exports.pagesShape = _react.PropTypes.arrayOf(pageShape);

var catalogShape = exports.catalogShape = _react.PropTypes.shape({
  basePath: _react.PropTypes.string.isRequired,
  page: pageShape.isRequired,
  getSpecimen: _react.PropTypes.func.isRequired,
  theme: _react.PropTypes.object.isRequired,
  title: _react.PropTypes.string.isRequired,
  pages: pagesShape.isRequired,
  pageTree: pagesShape.isRequired,
  logoSrc: _react.PropTypes.string
});
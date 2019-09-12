"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _getConfig = _interopRequireDefault(require("af-webpack/getConfig"));

var _browsers = _interopRequireDefault(require("./defaultConfigs/browsers"));

var _getEntry = _interopRequireDefault(require("./utils/getEntry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const debug = require('debug')('roadhog:getWebpackConfig');

const isDev = process.env.NODE_ENV === 'development';

function _default(opts = {}) {
  const cwd = opts.cwd,
        config = opts.config,
        babel = opts.babel,
        paths = opts.paths,
        entry = opts.entry;
  const browserslist = config.browserslist || _browsers.default;
  debug(`babel: ${babel}`);
  debug(`browserslist: ${browserslist}`);
  return (0, _getConfig.default)(_objectSpread({
    cwd
  }, config, {
    entry: (0, _getEntry.default)({
      cwd: paths.appDirectory,
      entry: entry || config.entry,
      isBuild: !isDev
    }),
    babel: config.babel || {
      presets: [[babel, {
        browsers: browserslist
      }], ...(config.extraBabelPresets || [])],
      plugins: config.extraBabelPlugins || []
    },
    browserslist
  }));
}
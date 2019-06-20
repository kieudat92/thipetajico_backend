'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = (0, _config.getConfig)(process.env.NODE_ENV);
_mongoose2.default.Promise = global.Promise;
var connect = exports.connect = function connect() {
  return _mongoose2.default.connect(config.MONGO_URI);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvZGIuanMiXSwibmFtZXMiOlsiY29uZmlnIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwibW9uZ29vc2UiLCJQcm9taXNlIiwiZ2xvYmFsIiwiY29ubmVjdCIsIk1PTkdPX1VSSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxTQUFTLHVCQUFVQyxRQUFRQyxHQUFSLENBQVlDLFFBQXRCLENBQWY7QUFDQUMsbUJBQVNDLE9BQVQsR0FBbUJDLE9BQU9ELE9BQTFCO0FBQ08sSUFBTUUsNEJBQVUsU0FBVkEsT0FBVTtBQUFBLFNBQU1ILG1CQUFTRyxPQUFULENBQWlCUCxPQUFPUSxTQUF4QixDQUFOO0FBQUEsQ0FBaEIiLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgeyBnZXRDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5jb25zdCBjb25maWcgPSBnZXRDb25maWcocHJvY2Vzcy5lbnYuTk9ERV9FTlYpO1xyXG5tb25nb29zZS5Qcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XHJcbmV4cG9ydCBjb25zdCBjb25uZWN0ID0gKCkgPT4gbW9uZ29vc2UuY29ubmVjdChjb25maWcuTU9OR09fVVJJKTtcclxuIl19
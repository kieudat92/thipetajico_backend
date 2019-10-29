'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restRouter = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cauhoi = require('./resources/cauhoi/cauhoi.router');

var _chude = require('./resources/chude/chude.router');

var _dethi = require('./resources/dethi/dethi.router');

var _tester = require('./resources/tester/tester.router');

var _imgUpload = require('./resources/imgUpload/imgUpload.router');

var _danhsachthisinh = require('./resources/danhsachthisinh/danhsachthisinh.router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var restRouter = exports.restRouter = _express2.default.Router();

restRouter.use('/cauhoi', _cauhoi.cauhoiRouter);
restRouter.use('/chude', _chude.chudeRouter);
restRouter.use('/dethi', _dethi.dethiRouter);
restRouter.use('/tester', _tester.testerRouter);
restRouter.use('/image', _imgUpload.imgUploadRouter);
restRouter.use('/danhsachthisinh', _danhsachthisinh.danhsachthisinhRouter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsicmVzdFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJjYXVob2lSb3V0ZXIiLCJjaHVkZVJvdXRlciIsImRldGhpUm91dGVyIiwidGVzdGVyUm91dGVyIiwiaW1nVXBsb2FkUm91dGVyIiwiZGFuaHNhY2h0aGlzaW5oUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVPLElBQU1BLGtDQUFhQyxrQkFBUUMsTUFBUixFQUFuQjs7QUFFUEYsV0FBV0csR0FBWCxDQUFlLFNBQWYsRUFBMEJDLG9CQUExQjtBQUNBSixXQUFXRyxHQUFYLENBQWUsUUFBZixFQUF5QkUsa0JBQXpCO0FBQ0FMLFdBQVdHLEdBQVgsQ0FBZSxRQUFmLEVBQXlCRyxrQkFBekI7QUFDQU4sV0FBV0csR0FBWCxDQUFlLFNBQWYsRUFBMEJJLG9CQUExQjtBQUNBUCxXQUFXRyxHQUFYLENBQWUsUUFBZixFQUF5QkssMEJBQXpCO0FBQ0FSLFdBQVdHLEdBQVgsQ0FBZSxrQkFBZixFQUFtQ00sc0NBQW5DIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5pbXBvcnQgeyBjYXVob2lSb3V0ZXIgfSBmcm9tICcuL3Jlc291cmNlcy9jYXVob2kvY2F1aG9pLnJvdXRlcic7XHJcbmltcG9ydCB7IGNodWRlUm91dGVyIH0gZnJvbSAnLi9yZXNvdXJjZXMvY2h1ZGUvY2h1ZGUucm91dGVyJztcclxuaW1wb3J0IHsgZGV0aGlSb3V0ZXIgfSBmcm9tICcuL3Jlc291cmNlcy9kZXRoaS9kZXRoaS5yb3V0ZXInO1xyXG5pbXBvcnQgeyB0ZXN0ZXJSb3V0ZXIgfSBmcm9tICcuL3Jlc291cmNlcy90ZXN0ZXIvdGVzdGVyLnJvdXRlcic7XHJcbmltcG9ydCB7IGltZ1VwbG9hZFJvdXRlciB9IGZyb20gJy4vcmVzb3VyY2VzL2ltZ1VwbG9hZC9pbWdVcGxvYWQucm91dGVyJztcclxuaW1wb3J0IHsgZGFuaHNhY2h0aGlzaW5oUm91dGVyIH0gZnJvbSAnLi9yZXNvdXJjZXMvZGFuaHNhY2h0aGlzaW5oL2RhbmhzYWNodGhpc2luaC5yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc3RSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxucmVzdFJvdXRlci51c2UoJy9jYXVob2knLCBjYXVob2lSb3V0ZXIpO1xyXG5yZXN0Um91dGVyLnVzZSgnL2NodWRlJywgY2h1ZGVSb3V0ZXIpO1xyXG5yZXN0Um91dGVyLnVzZSgnL2RldGhpJywgZGV0aGlSb3V0ZXIpO1xyXG5yZXN0Um91dGVyLnVzZSgnL3Rlc3RlcicsIHRlc3RlclJvdXRlcik7XHJcbnJlc3RSb3V0ZXIudXNlKCcvaW1hZ2UnLCBpbWdVcGxvYWRSb3V0ZXIpO1xyXG5yZXN0Um91dGVyLnVzZSgnL2RhbmhzYWNodGhpc2luaCcsIGRhbmhzYWNodGhpc2luaFJvdXRlcik7XHJcbiJdfQ==
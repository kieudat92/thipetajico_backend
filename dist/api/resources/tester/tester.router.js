'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testerRouter = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _tester = require('./tester.controller');

var _tester2 = _interopRequireDefault(_tester);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testerRouter = exports.testerRouter = _express2.default.Router();
testerRouter.route('/').post(_tester2.default.create).get(_tester2.default.findAll);

testerRouter.route('/:id').get(_tester2.default.findOne).delete(_tester2.default.delete).put(_tester2.default.update);
testerRouter.get('/find-by-date/:date', _tester2.default.findByDate);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3Rlc3Rlci90ZXN0ZXIucm91dGVyLmpzIl0sIm5hbWVzIjpbInRlc3RlclJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJyb3V0ZSIsInBvc3QiLCJ0ZXN0ZXJDb250cm9sbGVyIiwiY3JlYXRlIiwiZ2V0IiwiZmluZEFsbCIsImZpbmRPbmUiLCJkZWxldGUiLCJwdXQiLCJ1cGRhdGUiLCJmaW5kQnlEYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsc0NBQWVDLGtCQUFRQyxNQUFSLEVBQXJCO0FBQ1BGLGFBQ0dHLEtBREgsQ0FDUyxHQURULEVBRUdDLElBRkgsQ0FFUUMsaUJBQWlCQyxNQUZ6QixFQUdHQyxHQUhILENBR09GLGlCQUFpQkcsT0FIeEI7O0FBS0FSLGFBQ0dHLEtBREgsQ0FDUyxNQURULEVBRUdJLEdBRkgsQ0FFT0YsaUJBQWlCSSxPQUZ4QixFQUdHQyxNQUhILENBR1VMLGlCQUFpQkssTUFIM0IsRUFJR0MsR0FKSCxDQUlPTixpQkFBaUJPLE1BSnhCO0FBS0FaLGFBQ0FPLEdBREEsQ0FDSSxxQkFESixFQUMyQkYsaUJBQWlCUSxVQUQ1QyIsImZpbGUiOiJ0ZXN0ZXIucm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB0ZXN0ZXJDb250cm9sbGVyIGZyb20gJy4vdGVzdGVyLmNvbnRyb2xsZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRlc3RlclJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcbnRlc3RlclJvdXRlclxyXG4gIC5yb3V0ZSgnLycpXHJcbiAgLnBvc3QodGVzdGVyQ29udHJvbGxlci5jcmVhdGUpXHJcbiAgLmdldCh0ZXN0ZXJDb250cm9sbGVyLmZpbmRBbGwpO1xyXG5cclxudGVzdGVyUm91dGVyXHJcbiAgLnJvdXRlKCcvOmlkJylcclxuICAuZ2V0KHRlc3RlckNvbnRyb2xsZXIuZmluZE9uZSlcclxuICAuZGVsZXRlKHRlc3RlckNvbnRyb2xsZXIuZGVsZXRlKVxyXG4gIC5wdXQodGVzdGVyQ29udHJvbGxlci51cGRhdGUpO1xyXG50ZXN0ZXJSb3V0ZXIuXHJcbmdldCgnL2ZpbmQtYnktZGF0ZS86ZGF0ZScsIHRlc3RlckNvbnRyb2xsZXIuZmluZEJ5RGF0ZSlcclxuIl19
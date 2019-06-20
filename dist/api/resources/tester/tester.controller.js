'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _tester = require('./tester.model');

var _tester2 = _interopRequireDefault(_tester);

var _responseAction = require('../../utils/responseAction');

var responseAction = _interopRequireWildcard(_responseAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  create: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var body, tester;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = req.body;
              _context.prev = 1;
              _context.next = 4;
              return _tester2.default.create(body);

            case 4:
              tester = _context.sent;
              return _context.abrupt('return', res.json(tester));

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](1);

              console.error(_context.t0);
              responseAction.error(res, 500, _context.t0.errors);
              return _context.abrupt('return');

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 8]]);
    }));

    function create(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return create;
  }(),
  findAll: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var tester;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _tester2.default.find({ is_deleted: false });

            case 3:
              tester = _context2.sent;
              return _context2.abrupt('return', res.json(tester));

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2['catch'](0);

              console.error(_context2.t0);
              return _context2.abrupt('return', res.status(500).send(_context2.t0));

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 7]]);
    }));

    function findAll(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return findAll;
  }(),
  findOne: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      var id, tester;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              id = req.params.id;
              _context3.next = 4;
              return _tester2.default.findOne({ _id: id, is_deleted: false });

            case 4:
              tester = _context3.sent;

              if (tester) {
                _context3.next = 8;
                break;
              }

              responseAction.error(res, 404, '');
              return _context3.abrupt('return');

            case 8:
              return _context3.abrupt('return', res.json(tester));

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3['catch'](0);

              console.error(_context3.t0);
              return _context3.abrupt('return', res.status(500).send(_context3.t0));

            case 15:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this, [[0, 11]]);
    }));

    function findOne(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return findOne;
  }(),
  delete: function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
      var id, tester;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              id = req.params.id;
              _context4.next = 4;
              return _tester2.default.findOneAndUpdate({ _id: id }, { is_deleted: true }, { new: true });

            case 4:
              tester = _context4.sent;

              if (tester) {
                _context4.next = 8;
                break;
              }

              responseAction.error(res, 404, '');
              return _context4.abrupt('return');

            case 8:
              return _context4.abrupt('return', res.json(tester));

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4['catch'](0);

              console.error(_context4.t0);
              return _context4.abrupt('return', res.status(500).send(_context4.t0));

            case 15:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this, [[0, 11]]);
    }));

    function _delete(_x7, _x8) {
      return _ref4.apply(this, arguments);
    }

    return _delete;
  }(),
  update: function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
      var id, body, tester;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              id = req.params.id;
              body = req.body;
              _context5.next = 5;
              return _tester2.default.findOneAndUpdate({ _id: id }, body, { new: true });

            case 5:
              tester = _context5.sent;

              if (tester) {
                _context5.next = 9;
                break;
              }

              responseAction.error(res, 404, '');
              return _context5.abrupt('return');

            case 9:
              return _context5.abrupt('return', res.json(tester));

            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5['catch'](0);

              console.error(_context5.t0);
              responseAction.error(res, 500, _context5.t0.errors);
              return _context5.abrupt('return');

            case 17:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this, [[0, 12]]);
    }));

    function update(_x9, _x10) {
      return _ref5.apply(this, arguments);
    }

    return update;
  }(),


  ////////////////
  findByDate: function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
      var date, date_val, startDate, endDate, tester;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              date = req.params.date;
              date_val = new Date(date);
              startDate = date_val.setHours(0, 0, 0, 0);
              endDate = date_val.setHours(23, 59, 59, 999);
              _context6.next = 7;
              return _tester2.default.find({ is_deleted: false, created_at: { $gte: startDate, $lt: endDate } }).sort({ created_at: -1 });

            case 7:
              tester = _context6.sent;

              if (!tester) {
                _context6.next = 12;
                break;
              }

              return _context6.abrupt('return', res.json(tester));

            case 12:
              return _context6.abrupt('return', res.json({ success: false, message: 'Ngày thi không có đề thi.' }));

            case 13:
              _context6.next = 20;
              break;

            case 15:
              _context6.prev = 15;
              _context6.t0 = _context6['catch'](0);

              console.error(_context6.t0);
              responseAction.error(res, 500, _context6.t0.errors);
              return _context6.abrupt('return');

            case 20:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this, [[0, 15]]);
    }));

    function findByDate(_x11, _x12) {
      return _ref6.apply(this, arguments);
    }

    return findByDate;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3Rlc3Rlci90ZXN0ZXIuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJyZXNwb25zZUFjdGlvbiIsImNyZWF0ZSIsInJlcSIsInJlcyIsImJvZHkiLCJUZXN0ZXIiLCJ0ZXN0ZXIiLCJqc29uIiwiY29uc29sZSIsImVycm9yIiwiZXJyb3JzIiwiZmluZEFsbCIsImZpbmQiLCJpc19kZWxldGVkIiwic3RhdHVzIiwic2VuZCIsImZpbmRPbmUiLCJpZCIsInBhcmFtcyIsIl9pZCIsImRlbGV0ZSIsImZpbmRPbmVBbmRVcGRhdGUiLCJuZXciLCJ1cGRhdGUiLCJmaW5kQnlEYXRlIiwiZGF0ZSIsImRhdGVfdmFsIiwiRGF0ZSIsInN0YXJ0RGF0ZSIsInNldEhvdXJzIiwiZW5kRGF0ZSIsImNyZWF0ZWRfYXQiLCIkZ3RlIiwiJGx0Iiwic29ydCIsInN1Y2Nlc3MiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0lBQVlBLGM7Ozs7OztrQkFFRztBQUNQQyxRQURPO0FBQUEseUdBQ0FDLEdBREEsRUFDS0MsR0FETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUEMsa0JBRk8sR0FFQUYsSUFBSUUsSUFGSjtBQUFBO0FBQUE7QUFBQSxxQkFJWUMsaUJBQU9KLE1BQVAsQ0FBY0csSUFBZCxDQUpaOztBQUFBO0FBSUhFLG9CQUpHO0FBQUEsK0NBS0ZILElBQUlJLElBQUosQ0FBU0QsTUFBVCxDQUxFOztBQUFBO0FBQUE7QUFBQTs7QUFPVEUsc0JBQVFDLEtBQVI7QUFDRVQsNkJBQWVTLEtBQWYsQ0FBcUJOLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLFlBQUlPLE1BQW5DO0FBUk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFZUEMsU0FaTztBQUFBLDJHQVlDVCxHQVpELEVBWU1DLEdBWk47QUFB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QUFBO0FBQUE7O0FBb0ZUNUIsc0JBQVFDLEtBQVI7QUFDQVQsNkJBQWVTLEtBQWYsQ0FBcUJOLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLGFBQUlPLE1BQW5DO0FBckZTOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiJ0ZXN0ZXIuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZXN0ZXIgZnJvbSAnLi90ZXN0ZXIubW9kZWwnO1xyXG5pbXBvcnQgKiBhcyByZXNwb25zZUFjdGlvbiBmcm9tICcuLi8uLi91dGlscy9yZXNwb25zZUFjdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBhc3luYyBjcmVhdGUocmVxLCByZXMpIHtcclxuICAgIGxldCBib2R5ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRlc3RlciA9IGF3YWl0IFRlc3Rlci5jcmVhdGUoYm9keSk7XHJcbiAgICAgIHJldHVybiByZXMuanNvbih0ZXN0ZXIpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICByZXNwb25zZUFjdGlvbi5lcnJvcihyZXMsIDUwMCwgZXJyLmVycm9ycylcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICB9LFxyXG4gIGFzeW5jIGZpbmRBbGwocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBjb25zdCB0ZXN0ZXIgPSBhd2FpdCBUZXN0ZXIuZmluZCh7aXNfZGVsZXRlZDogZmFsc2V9KVxyXG4gICAgICByZXR1cm4gcmVzLmpzb24odGVzdGVyKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnIpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG5cclxuICBhc3luYyBmaW5kT25lKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgICBjb25zdCB0ZXN0ZXIgPSBhd2FpdCBUZXN0ZXIuZmluZE9uZSh7X2lkOiBpZCwgaXNfZGVsZXRlZDogZmFsc2V9KTtcclxuICAgICAgaWYgKCF0ZXN0ZXIpIHtcclxuICAgICAgICAgIHJlc3BvbnNlQWN0aW9uLmVycm9yKHJlcywgNDA0LCAnJylcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXMuanNvbih0ZXN0ZXIpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycik7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhc3luYyBkZWxldGUocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICAgIGNvbnN0IHRlc3RlciA9IGF3YWl0IFRlc3Rlci5maW5kT25lQW5kVXBkYXRlKHsgX2lkOiBpZCB9LCB7aXNfZGVsZXRlZDogdHJ1ZX0sIHsgbmV3OiB0cnVlIH0pO1xyXG4gICAgICBpZiAoIXRlc3Rlcikge1xyXG4gICAgICAgICAgcmVzcG9uc2VBY3Rpb24uZXJyb3IocmVzLCA0MDQsICcnKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlcy5qc29uKHRlc3Rlcik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFzeW5jIHVwZGF0ZShyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgICAgbGV0IGJvZHkgPSByZXEuYm9keVxyXG4gICAgICBjb25zdCB0ZXN0ZXIgPSBhd2FpdCBUZXN0ZXIuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZDogaWQgfSwgYm9keSwgeyBuZXc6IHRydWUgfSk7XHJcbiAgICAgIGlmICghdGVzdGVyKSB7XHJcbiAgICAgICAgICByZXNwb25zZUFjdGlvbi5lcnJvcihyZXMsIDQwNCwgJycpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzLmpzb24odGVzdGVyKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJlc3BvbnNlQWN0aW9uLmVycm9yKHJlcywgNTAwLCBlcnIuZXJyb3JzKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvLy8vLy8vLy8vLy8vLy8vXHJcbiAgYXN5bmMgZmluZEJ5RGF0ZShyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBkYXRlIH0gPSByZXEucGFyYW1zO1xyXG5cclxuICAgICAgbGV0IGRhdGVfdmFsID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgIGxldCBzdGFydERhdGUgPSBkYXRlX3ZhbC5zZXRIb3VycygwLCAwLCAwLCAwKVxyXG4gICAgICBsZXQgZW5kRGF0ZSA9IGRhdGVfdmFsLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSlcclxuICAgICAgbGV0IHRlc3RlciA9IGF3YWl0IFRlc3Rlci5maW5kKHtpc19kZWxldGVkOiBmYWxzZSwgY3JlYXRlZF9hdDogeyRndGU6IHN0YXJ0RGF0ZSwgJGx0OiBlbmREYXRlfX0pLnNvcnQoe2NyZWF0ZWRfYXQ6IC0xfSlcclxuICAgICAgaWYodGVzdGVyKXtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24odGVzdGVyKVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oe3N1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnTmfDoHkgdGhpIGtow7RuZyBjw7MgxJHhu4EgdGhpLid9KVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICByZXNwb25zZUFjdGlvbi5lcnJvcihyZXMsIDUwMCwgZXJyLmVycm9ycylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBcclxuICB9LFxyXG59O1xyXG4iXX0=
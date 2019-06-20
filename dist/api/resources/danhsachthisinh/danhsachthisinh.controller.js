'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _danhsachthisinh = require('./danhsachthisinh.model');

var _danhsachthisinh2 = _interopRequireDefault(_danhsachthisinh);

var _responseAction = require('../../utils/responseAction');

var responseAction = _interopRequireWildcard(_responseAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  create: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var body, danhsachthisinh;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = req.body;
              _context.prev = 1;
              _context.next = 4;
              return _danhsachthisinh2.default.create(body);

            case 4:
              danhsachthisinh = _context.sent;
              return _context.abrupt('return', res.json(danhsachthisinh));

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
      var danhsachthisinh;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _danhsachthisinh2.default.find({ is_deleted: false });

            case 3:
              danhsachthisinh = _context2.sent;
              return _context2.abrupt('return', res.json(danhsachthisinh));

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
      var id, danhsachthisinh;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              id = req.params.id;
              _context3.next = 4;
              return _danhsachthisinh2.default.findOne({ _id: id, is_deleted: false });

            case 4:
              danhsachthisinh = _context3.sent;

              if (danhsachthisinh) {
                _context3.next = 8;
                break;
              }

              responseAction.error(res, 404, '');
              return _context3.abrupt('return');

            case 8:
              return _context3.abrupt('return', res.json(danhsachthisinh));

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
      var id, danhsachthisinh;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              id = req.params.id;
              _context4.next = 4;
              return _danhsachthisinh2.default.findOneAndUpdate({ _id: id }, { is_deleted: true }, { new: true });

            case 4:
              danhsachthisinh = _context4.sent;

              if (danhsachthisinh) {
                _context4.next = 8;
                break;
              }

              responseAction.error(res, 404, '');
              return _context4.abrupt('return');

            case 8:
              return _context4.abrupt('return', res.json(danhsachthisinh));

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
      var id, body, danhsachthisinh;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              id = req.params.id;
              body = req.body;
              _context5.next = 5;
              return _danhsachthisinh2.default.findOneAndUpdate({ _id: id }, body, { new: true });

            case 5:
              danhsachthisinh = _context5.sent;

              if (danhsachthisinh) {
                _context5.next = 9;
                break;
              }

              responseAction.error(res, 404, '');
              return _context5.abrupt('return');

            case 9:
              return _context5.abrupt('return', res.json(danhsachthisinh));

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
  getAllThiSinhByDate: function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
      var date, date_val, startDate, endDate, danhsachthisinh;
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
              return _danhsachthisinh2.default.find({ is_deleted: false, ngaythi: { $gte: startDate, $lt: endDate } });

            case 7:
              danhsachthisinh = _context6.sent;
              return _context6.abrupt('return', res.json(danhsachthisinh));

            case 11:
              _context6.prev = 11;
              _context6.t0 = _context6['catch'](0);

              console.error(_context6.t0);
              responseAction.error(res, 500, _context6.t0.errors);
              return _context6.abrupt('return');

            case 16:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this, [[0, 11]]);
    }));

    function getAllThiSinhByDate(_x11, _x12) {
      return _ref6.apply(this, arguments);
    }

    return getAllThiSinhByDate;
  }(),
  getThiSinhByMaso: function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res) {
      var maso, danhsachthisinh;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              maso = req.params.maso;
              _context7.next = 4;
              return _danhsachthisinh2.default.find({ is_deleted: false, maso: maso });

            case 4:
              danhsachthisinh = _context7.sent;
              return _context7.abrupt('return', res.json(danhsachthisinh));

            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7['catch'](0);

              console.error(_context7.t0);
              responseAction.error(res, 500, _context7.t0.errors);
              return _context7.abrupt('return');

            case 13:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, this, [[0, 8]]);
    }));

    function getThiSinhByMaso(_x13, _x14) {
      return _ref7.apply(this, arguments);
    }

    return getThiSinhByMaso;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2RhbmhzYWNodGhpc2luaC9kYW5oc2FjaHRoaXNpbmguY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJyZXNwb25zZUFjdGlvbiIsImNyZWF0ZSIsInJlcSIsInJlcyIsImJvZHkiLCJEYW5oc2FjaHRoaXNpbmgiLCJkYW5oc2FjaHRoaXNpbmgiLCJqc29uIiwiY29uc29sZSIsImVycm9yIiwiZXJyb3JzIiwiZmluZEFsbCIsImZpbmQiLCJpc19kZWxldGVkIiwic3RhdHVzIiwic2VuZCIsImZpbmRPbmUiLCJpZCIsInBhcmFtcyIsIl9pZCIsImRlbGV0ZSIsImZpbmRPbmVBbmRVcGRhdGUiLCJuZXciLCJ1cGRhdGUiLCJnZXRBbGxUaGlTaW5oQnlEYXRlIiwiZGF0ZSIsImRhdGVfdmFsIiwiRGF0ZSIsInN0YXJ0RGF0ZSIsInNldEhvdXJzIiwiZW5kRGF0ZSIsIm5nYXl0aGkiLCIkZ3RlIiwiJGx0IiwiZ2V0VGhpU2luaEJ5TWFzbyIsIm1hc28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7SUFBWUEsYzs7Ozs7O2tCQUVHO0FBQ1BDLFFBRE87QUFBQSx5R0FDQUMsR0FEQSxFQUNLQyxHQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVQQyxrQkFGTyxHQUVBRixJQUFJRSxJQUZKO0FBQUE7QUFBQTtBQUFBLHFCQUlxQkMsMEJBQWdCSixNQUFoQixDQUF1QkcsSUFBdkIsQ0FKckI7O0FBQUE7QUFJSEUsNkJBSkc7QUFBQSwrQ0FLRkgsSUFBSUksSUFBSixDQUFTRCxlQUFULENBTEU7O0FBQUE7QUFBQTtBQUFBOztBQU9URSxzQkFBUUMsS0FBUjtBQUNFVCw2QkFBZVMsS0FBZixDQUFxQk4sR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsWUFBSU8sTUFBbkM7QUFSTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFvRlB3QixrQkFwRk87QUFBQSwyR0FvRlVoQyxHQXBGVixFQW9GZUMsR0FwRmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFzRkRnQyxrQkF0RkMsR0FzRlFqQyxJQUFJZ0IsTUF0RlosQ0FzRkRpQixJQXRGQztBQUFBO0FBQUEscUJBdUZxQjlCLDBCQUFnQk8sSUFBaEIsQ0FBcUIsRUFBRUMsWUFBWSxLQUFkLEVBQXFCc0IsTUFBT0EsSUFBNUIsRUFBckIsQ0F2RnJCOztBQUFBO0FBdUZIN0IsNkJBdkZHO0FBQUEsZ0RBeUZGSCxJQUFJSSxJQUFKLENBQVNELGVBQVQsQ0F6RkU7O0FBQUE7QUFBQTtBQUFBOztBQTJGVEUsc0JBQVFDLEtBQVI7QUFDQVQsNkJBQWVTLEtBQWYsQ0FBcUJOLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLGFBQUlPLE1BQW5DO0FBNUZTOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiJkYW5oc2FjaHRoaXNpbmguY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYW5oc2FjaHRoaXNpbmggZnJvbSAnLi9kYW5oc2FjaHRoaXNpbmgubW9kZWwnO1xyXG5pbXBvcnQgKiBhcyByZXNwb25zZUFjdGlvbiBmcm9tICcuLi8uLi91dGlscy9yZXNwb25zZUFjdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBhc3luYyBjcmVhdGUocmVxLCByZXMpIHtcclxuICAgIGxldCBib2R5ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhbmhzYWNodGhpc2luaCA9IGF3YWl0IERhbmhzYWNodGhpc2luaC5jcmVhdGUoYm9keSk7XHJcbiAgICAgIHJldHVybiByZXMuanNvbihkYW5oc2FjaHRoaXNpbmgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICByZXNwb25zZUFjdGlvbi5lcnJvcihyZXMsIDUwMCwgZXJyLmVycm9ycylcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICB9LFxyXG4gIGFzeW5jIGZpbmRBbGwocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBjb25zdCBkYW5oc2FjaHRoaXNpbmggPSBhd2FpdCBEYW5oc2FjaHRoaXNpbmguZmluZCh7aXNfZGVsZXRlZDogZmFsc2V9KVxyXG4gICAgICByZXR1cm4gcmVzLmpzb24oZGFuaHNhY2h0aGlzaW5oKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnIpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG5cclxuICBhc3luYyBmaW5kT25lKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgICBjb25zdCBkYW5oc2FjaHRoaXNpbmggPSBhd2FpdCBEYW5oc2FjaHRoaXNpbmguZmluZE9uZSh7X2lkOiBpZCwgaXNfZGVsZXRlZDogZmFsc2V9KTtcclxuICAgICAgaWYgKCFkYW5oc2FjaHRoaXNpbmgpIHtcclxuICAgICAgICAgIHJlc3BvbnNlQWN0aW9uLmVycm9yKHJlcywgNDA0LCAnJylcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXMuanNvbihkYW5oc2FjaHRoaXNpbmgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycik7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhc3luYyBkZWxldGUocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICAgIGNvbnN0IGRhbmhzYWNodGhpc2luaCA9IGF3YWl0IERhbmhzYWNodGhpc2luaC5maW5kT25lQW5kVXBkYXRlKHsgX2lkOiBpZCB9LCB7aXNfZGVsZXRlZDogdHJ1ZX0sIHsgbmV3OiB0cnVlIH0pO1xyXG4gICAgICBpZiAoIWRhbmhzYWNodGhpc2luaCkge1xyXG4gICAgICAgICAgcmVzcG9uc2VBY3Rpb24uZXJyb3IocmVzLCA0MDQsICcnKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlcy5qc29uKGRhbmhzYWNodGhpc2luaCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFzeW5jIHVwZGF0ZShyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgICAgbGV0IGJvZHkgPSByZXEuYm9keVxyXG4gICAgICBjb25zdCBkYW5oc2FjaHRoaXNpbmggPSBhd2FpdCBEYW5oc2FjaHRoaXNpbmguZmluZE9uZUFuZFVwZGF0ZSh7IF9pZDogaWQgfSwgYm9keSwgeyBuZXc6IHRydWUgfSk7XHJcbiAgICAgIGlmICghZGFuaHNhY2h0aGlzaW5oKSB7XHJcbiAgICAgICAgICByZXNwb25zZUFjdGlvbi5lcnJvcihyZXMsIDQwNCwgJycpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzLmpzb24oZGFuaHNhY2h0aGlzaW5oKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJlc3BvbnNlQWN0aW9uLmVycm9yKHJlcywgNTAwLCBlcnIuZXJyb3JzKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICB9LFxyXG4gIGFzeW5jIGdldEFsbFRoaVNpbmhCeURhdGUocmVxLCByZXMpe1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBkYXRlIH0gPSByZXEucGFyYW1zO1xyXG5cclxuICAgICAgbGV0IGRhdGVfdmFsID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgIGxldCBzdGFydERhdGUgPSBkYXRlX3ZhbC5zZXRIb3VycygwLCAwLCAwLCAwKVxyXG4gICAgICBsZXQgZW5kRGF0ZSA9IGRhdGVfdmFsLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSlcclxuICAgICAgY29uc3QgZGFuaHNhY2h0aGlzaW5oID0gYXdhaXQgRGFuaHNhY2h0aGlzaW5oLmZpbmQoeyBpc19kZWxldGVkOiBmYWxzZSwgbmdheXRoaTogIHskZ3RlOiBzdGFydERhdGUsICRsdDogZW5kRGF0ZX0gfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLmpzb24oZGFuaHNhY2h0aGlzaW5oKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJlc3BvbnNlQWN0aW9uLmVycm9yKHJlcywgNTAwLCBlcnIuZXJyb3JzKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICB9LFxyXG4gIGFzeW5jIGdldFRoaVNpbmhCeU1hc28ocmVxLCByZXMpe1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBtYXNvIH0gPSByZXEucGFyYW1zOyBcclxuICAgICAgY29uc3QgZGFuaHNhY2h0aGlzaW5oID0gYXdhaXQgRGFuaHNhY2h0aGlzaW5oLmZpbmQoeyBpc19kZWxldGVkOiBmYWxzZSwgbWFzbzogIG1hc28gfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLmpzb24oZGFuaHNhY2h0aGlzaW5oKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJlc3BvbnNlQWN0aW9uLmVycm9yKHJlcywgNTAwLCBlcnIuZXJyb3JzKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICB9LFxyXG5cclxufTtcclxuIl19
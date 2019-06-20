'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _chude = require('./chude.model');

var _chude2 = _interopRequireDefault(_chude);

var _responseAction = require('../../utils/responseAction');

var responseAction = _interopRequireWildcard(_responseAction);

var _cauhoi = require('../cauhoi/cauhoi.model');

var _cauhoi2 = _interopRequireDefault(_cauhoi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  create: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var body, chude;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = req.body;
              _context.prev = 1;
              _context.next = 4;
              return _chude2.default.create(body);

            case 4:
              chude = _context.sent;
              return _context.abrupt('return', res.json(chude));

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
      var chude;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _chude2.default.find({ is_deleted: false });

            case 3:
              chude = _context2.sent;
              return _context2.abrupt('return', res.json(chude));

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
      var id, chude;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              id = req.params.id;
              _context3.next = 4;
              return _chude2.default.findOne({ _id: id, is_deleted: false });

            case 4:
              chude = _context3.sent;

              if (chude) {
                _context3.next = 8;
                break;
              }

              responseAction.error(res, 404, '');
              return _context3.abrupt('return');

            case 8:
              return _context3.abrupt('return', res.json(chude));

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
      var id, chude;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              id = req.params.id;
              _context4.next = 4;
              return _chude2.default.findOneAndUpdate({ _id: id }, { is_deleted: true }, { new: true });

            case 4:
              chude = _context4.sent;

              if (chude) {
                _context4.next = 8;
                break;
              }

              responseAction.error(res, 404, '');
              return _context4.abrupt('return');

            case 8:
              return _context4.abrupt('return', res.json(chude));

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
      var id, body, chude;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              id = req.params.id;
              body = req.body;
              _context5.next = 5;
              return _chude2.default.findOneAndUpdate({ _id: id }, body, { new: true });

            case 5:
              chude = _context5.sent;

              if (chude) {
                _context5.next = 9;
                break;
              }

              responseAction.error(res, 404, '');
              return _context5.abrupt('return');

            case 9:
              return _context5.abrupt('return', res.json(chude));

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
  getAllCauHoiByChude: function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
      var id, cauhoi;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              id = req.params.id;
              _context6.next = 4;
              return _cauhoi2.default.find({ is_deleted: false, chude_id: id });

            case 4:
              cauhoi = _context6.sent;
              return _context6.abrupt('return', res.json(cauhoi));

            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6['catch'](0);

              console.error(_context6.t0);
              responseAction.error(res, 500, _context6.t0.errors);
              return _context6.abrupt('return');

            case 13:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this, [[0, 8]]);
    }));

    function getAllCauHoiByChude(_x11, _x12) {
      return _ref6.apply(this, arguments);
    }

    return getAllCauHoiByChude;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NodWRlL2NodWRlLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsicmVzcG9uc2VBY3Rpb24iLCJjcmVhdGUiLCJyZXEiLCJyZXMiLCJib2R5IiwiQ2h1ZGUiLCJjaHVkZSIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJlcnJvcnMiLCJmaW5kQWxsIiwiZmluZCIsImlzX2RlbGV0ZWQiLCJzdGF0dXMiLCJzZW5kIiwiZmluZE9uZSIsImlkIiwicGFyYW1zIiwiX2lkIiwiZGVsZXRlIiwiZmluZE9uZUFuZFVwZGF0ZSIsIm5ldyIsInVwZGF0ZSIsImdldEFsbENhdUhvaUJ5Q2h1ZGUiLCJDYXVob2kiLCJjaHVkZV9pZCIsImNhdWhvaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztJQUFZQSxjOztBQUNaOzs7Ozs7OztrQkFFZTtBQUNQQyxRQURPO0FBQUEseUdBQ0FDLEdBREEsRUFDS0MsR0FETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUEMsa0JBRk8sR0FFQUYsSUFBSUUsSUFGSjtBQUFBO0FBQUE7QUFBQSxxQkFJV0MsZ0JBQU1KLE1BQU4sQ0FBYUcsSUFBYixDQUpYOztBQUFBO0FBSUhFLG1CQUpHO0FBQUEsK0NBS0ZILElBQUlJLElBQUosQ0FBU0QsS0FBVCxDQUxFOztBQUFBO0FBQUE7QUFBQTs7QUFPVEUsc0JBQVFDLEtBQVI7QUFDRVQsNkJBQWVTLEtBQWYsQ0FBcUJOLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLFlBQUlPLE1BQW5DO0FBUk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFZUEMsU0FaTztBQUFBLDJHQVlDVCxHQVpELEVBWU1DLEdBWk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWVXRSxnQkFBTU8sSUFBTixDQUFXLEVBQUNDLFlB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Q0FBcUJOLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLGFBQUlPLE1BQW5DO0FBaEVTOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBb0VQYyxxQkFwRU87QUFBQSwyR0FvRWF0QixHQXBFYixFQW9Fa0JDLEdBcEVsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXNFRGMsZ0JBdEVDLEdBc0VNZixJQUFJZ0IsTUF0RVYsQ0FzRURELEVBdEVDO0FBQUE7QUFBQSxxQkF1RVlRLGlCQUFPYixJQUFQLENBQVksRUFBRUMsWUFBWSxLQUFkLEVBQXFCYSxVQUFVVCxFQUEvQixFQUFaLENBdkVaOztBQUFBO0FBdUVIVSxvQkF2RUc7QUFBQSxnREF5RUZ4QixJQUFJSSxJQUFKLENBQVNvQixNQUFULENBekVFOztBQUFBO0FBQUE7QUFBQTs7QUEyRVRuQixzQkFBUUMsS0FBUjtBQUNBVCw2QkFBZVMsS0FBZixDQUFxQk4sR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsYUFBSU8sTUFBbkM7QUE1RVM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6ImNodWRlLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2h1ZGUgZnJvbSAnLi9jaHVkZS5tb2RlbCc7XHJcbmltcG9ydCAqIGFzIHJlc3BvbnNlQWN0aW9uIGZyb20gJy4uLy4uL3V0aWxzL3Jlc3BvbnNlQWN0aW9uJ1xyXG5pbXBvcnQgQ2F1aG9pIGZyb20gJy4uL2NhdWhvaS9jYXVob2kubW9kZWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGFzeW5jIGNyZWF0ZShyZXEsIHJlcykge1xyXG4gICAgbGV0IGJvZHkgPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY2h1ZGUgPSBhd2FpdCBDaHVkZS5jcmVhdGUoYm9keSk7XHJcbiAgICAgIHJldHVybiByZXMuanNvbihjaHVkZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHJlc3BvbnNlQWN0aW9uLmVycm9yKHJlcywgNTAwLCBlcnIuZXJyb3JzKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYXN5bmMgZmluZEFsbChyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgIGNvbnN0IGNodWRlID0gYXdhaXQgQ2h1ZGUuZmluZCh7aXNfZGVsZXRlZDogZmFsc2V9KVxyXG4gICAgICByZXR1cm4gcmVzLmpzb24oY2h1ZGUpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycik7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcblxyXG4gIGFzeW5jIGZpbmRPbmUocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICAgIGNvbnN0IGNodWRlID0gYXdhaXQgQ2h1ZGUuZmluZE9uZSh7X2lkOiBpZCwgaXNfZGVsZXRlZDogZmFsc2V9KTtcclxuICAgICAgaWYgKCFjaHVkZSkge1xyXG4gICAgICAgICAgcmVzcG9uc2VBY3Rpb24uZXJyb3IocmVzLCA0MDQsICcnKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlcy5qc29uKGNodWRlKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnIpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYXN5bmMgZGVsZXRlKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgICBjb25zdCBjaHVkZSA9IGF3YWl0IENodWRlLmZpbmRPbmVBbmRVcGRhdGUoeyBfaWQ6IGlkIH0sIHtpc19kZWxldGVkOiB0cnVlfSwgeyBuZXc6IHRydWUgfSk7XHJcbiAgICAgIGlmICghY2h1ZGUpIHtcclxuICAgICAgICAgIHJlc3BvbnNlQWN0aW9uLmVycm9yKHJlcywgNDA0LCAnJylcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXMuanNvbihjaHVkZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFzeW5jIHVwZGF0ZShyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgICAgbGV0IGJvZHkgPSByZXEuYm9keVxyXG4gICAgICBjb25zdCBjaHVkZSA9IGF3YWl0IENodWRlLmZpbmRPbmVBbmRVcGRhdGUoeyBfaWQ6IGlkIH0sIGJvZHksIHsgbmV3OiB0cnVlIH0pO1xyXG4gICAgICBpZiAoIWNodWRlKSB7XHJcbiAgICAgICAgICByZXNwb25zZUFjdGlvbi5lcnJvcihyZXMsIDQwNCwgJycpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzLmpzb24oY2h1ZGUpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgcmVzcG9uc2VBY3Rpb24uZXJyb3IocmVzLCA1MDAsIGVyci5lcnJvcnMpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYXN5bmMgZ2V0QWxsQ2F1SG9pQnlDaHVkZShyZXEsIHJlcyl7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgICBjb25zdCBjYXVob2kgPSBhd2FpdCBDYXVob2kuZmluZCh7IGlzX2RlbGV0ZWQ6IGZhbHNlLCBjaHVkZV9pZDogaWQgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVzLmpzb24oY2F1aG9pKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJlc3BvbnNlQWN0aW9uLmVycm9yKHJlcywgNTAwLCBlcnIuZXJyb3JzKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICB9XHJcbn07XHJcbiJdfQ==
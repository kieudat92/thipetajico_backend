'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _dethi = require('./dethi.model');

var _dethi2 = _interopRequireDefault(_dethi);

var _cauhoi = require('../cauhoi/cauhoi.model');

var _cauhoi2 = _interopRequireDefault(_cauhoi);

var _responseAction = require('../../utils/responseAction');

var responseAction = _interopRequireWildcard(_responseAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  create: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var body, random, dethi;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = req.body;
              _context.prev = 1;

              if (!body.random) {
                _context.next = 7;
                break;
              }

              _context.next = 5;
              return _cauhoi2.default.aggregate([{ $match: { is_deleted: false } }, { $sample: { size: 3 } }]);

            case 5:
              random = _context.sent;
              return _context.abrupt('return', res.json(random));

            case 7:
              _context.next = 9;
              return _dethi2.default.create(body);

            case 9:
              dethi = _context.sent;
              return _context.abrupt('return', res.json(dethi));

            case 13:
              _context.prev = 13;
              _context.t0 = _context['catch'](1);

              console.error(_context.t0);
              responseAction.error(res, 500, _context.t0.errors);
              return _context.abrupt('return');

            case 18:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 13]]);
    }));

    function create(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return create;
  }(),
  findAll: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var dethi;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _dethi2.default.find({ is_deleted: false }).populate('questions');

            case 3:
              dethi = _context2.sent;
              return _context2.abrupt('return', res.json(dethi));

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
      var id, dethi;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              id = req.params.id;
              _context3.next = 4;
              return _dethi2.default.findOne({ _id: id, is_deleted: false }).populate('questions');

            case 4:
              dethi = _context3.sent;

              if (dethi) {
                _context3.next = 8;
                break;
              }

              responseAction.error(res, 404, '');
              return _context3.abrupt('return');

            case 8:
              return _context3.abrupt('return', res.json(dethi));

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
      var id, dethi;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              id = req.params.id;
              _context4.next = 4;
              return _dethi2.default.findOneAndUpdate({ _id: id }, { is_deleted: true }, { new: true });

            case 4:
              dethi = _context4.sent;

              if (dethi) {
                _context4.next = 8;
                break;
              }

              responseAction.error(res, 404, '');
              return _context4.abrupt('return');

            case 8:
              return _context4.abrupt('return', res.json(dethi));

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
      var id, body, dethi;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              id = req.params.id;
              body = req.body;
              _context5.next = 5;
              return _dethi2.default.findOneAndUpdate({ _id: id }, body, { new: true }).populate('questions');

            case 5:
              dethi = _context5.sent;

              if (dethi) {
                _context5.next = 9;
                break;
              }

              responseAction.error(res, 404, '');
              return _context5.abrupt('return');

            case 9:
              return _context5.abrupt('return', res.json(dethi));

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
  findByDate: function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
      var date, date_val, startDate, endDate, dethi;
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
              return _dethi2.default.findOne({ is_deleted: false, test_day: { $gte: startDate, $lt: endDate } }).sort({ created_at: -1 }).populate('questions');

            case 7:
              dethi = _context6.sent;

              if (!dethi) {
                _context6.next = 12;
                break;
              }

              return _context6.abrupt('return', res.json(dethi));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2RldGhpL2RldGhpLmNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsicmVzcG9uc2VBY3Rpb24iLCJjcmVhdGUiLCJyZXEiLCJyZXMiLCJib2R5IiwicmFuZG9tIiwiQ2F1aG9pIiwiYWdncmVnYXRlIiwiJG1hdGNoIiwiaXNfZGVsZXRlZCIsIiRzYW1wbGUiLCJzaXplIiwianNvbiIsIkRldGhpIiwiZGV0aGkiLCJjb25zb2xlIiwiZXJyb3IiLCJlcnJvcnMiLCJmaW5kQWxsIiwiZmluZCIsInBvcHVsYXRlIiwic3RhdHVzIiwic2VuZCIsImZpbmRPbmUiLCJpZCIsInBhcmFtcyIsIl9pZCIsImRlbGV0ZSIsImZpbmRPbmVBbmRVcGRhdGUiLCJuZXciLCJ1cGRhdGUiLCJmaW5kQnlEYXRlIiwiZGF0ZSIsImRhdGVfdmFsIiwiRGF0ZSIsInN0YXJ0RGF0ZSIsInNldEhvdXJzIiwiZW5kRGF0ZSIsInRlc3RfZGF5IiwiJGd0ZSIsIiRsdCIsInNvcnQiLCJjcmVhdGVkX2F0Iiwic3VjY2VzcyIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxjOzs7Ozs7a0JBRUc7QUFDUEMsUUFETztBQUFBLHlHQUNBQyxHQURBLEVBQ0tDLEdBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVBDLGtCQUZPLEdBRUFGLElBQUlFLElBRko7QUFBQTs7QUFBQSxtQkFJTkEsS0FBS0MsTUFKQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQUtZQyxpQkFBT0MsU0FBUCxDQUFpQixDQUNsQyxFQUFFQyxRQUFTLEVBQUNDLFlBQVksS0FBYixFQUFYLEVBRGtDLEVBRWxDLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxDQUFSLEVBQVgsRUFGa0MsQ0FBakIsQ0FMWjs7QUFBQTtBQUtITixvQkFMRztBQUFBLCtDQVNBRixJQUFJUyxJQUFKLENBQVNQLE1BQVQs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LEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLEVBQTFCLEVBQThCLEdBQTlCLENBbkZMO0FBQUE7QUFBQSxxQkFvRlN2QixnQkFBTVUsT0FBTixDQUFjLEVBQUNkLFlBQVksS0FBYixFQUFvQjZCLFVBQVUsRUFBQ0MsTUFBTUosU0FBUCxFQUFrQkssS0FBS0gsT0FBdkIsRUFBOUIsRUFBZCxFQUE4RUksSUFBOUUsQ0FBbUYsRUFBQ0MsWUFBWSxDQUFDLENBQWQsRUFBbkYsRUFBcUd0QixRQUFyRyxDQUE4RyxXQUE5RyxDQXBGVDs7QUFBQTtBQW9GTE4sbUJBcEZLOztBQUFBLG1CQXFGTkEsS0FyRk07QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0RBc0ZBWCxJQUFJUyxJQUFKLENBQVNFLEtBQVQsQ0F0RkE7O0FBQUE7QUFBQSxnREF3RkFYLElBQUlTLElBQUosQ0FBUyxFQUFDK0IsU0FBUyxLQUFWLEVBQWlCQyxTQUFTLDJCQUExQixFQUFULENBeEZBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBa0hUN0Isc0JBQVFDLEtBQVI7QUFDQWhCLDZCQUFlZ0IsS0FBZixDQUFxQmIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsYUFBSWMsTUFBbkM7QUFuSFM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6ImRldGhpLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGV0aGkgZnJvbSAnLi9kZXRoaS5tb2RlbCc7XHJcbmltcG9ydCBDYXVob2kgZnJvbSAnLi4vY2F1aG9pL2NhdWhvaS5tb2RlbCc7XHJcbmltcG9ydCAqIGFzIHJlc3BvbnNlQWN0aW9uIGZyb20gJy4uLy4uL3V0aWxzL3Jlc3BvbnNlQWN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGFzeW5jIGNyZWF0ZShyZXEsIHJlcykge1xyXG4gICAgbGV0IGJvZHkgPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYoYm9keS5yYW5kb20pe1xyXG4gICAgICAgIGxldCByYW5kb20gPSBhd2FpdCBDYXVob2kuYWdncmVnYXRlKFtcclxuICAgICAgICAgIHsgJG1hdGNoOiAge2lzX2RlbGV0ZWQ6IGZhbHNlfSB9LFxyXG4gICAgICAgICAgeyAkc2FtcGxlOiB7IHNpemU6IDMgfSB9XHJcbiAgICAgICAgICBdKVxyXG4gICAgICAgIHJldHVybiByZXMuanNvbihyYW5kb20pXHJcbiAgICAgIH1cclxuXHQgIC8vIGNoZWNrIMSR4buZIGTDoGkgMzAgLi4uLlxyXG5cdCAgLy9cclxuICAgICAgY29uc3QgZGV0aGkgPSBhd2FpdCBEZXRoaS5jcmVhdGUoYm9keSk7XHJcbiAgICAgIHJldHVybiByZXMuanNvbihkZXRoaSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHJlc3BvbnNlQWN0aW9uLmVycm9yKHJlcywgNTAwLCBlcnIuZXJyb3JzKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYXN5bmMgZmluZEFsbChyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgIGNvbnN0IGRldGhpID0gYXdhaXQgRGV0aGkuZmluZCh7aXNfZGVsZXRlZDogZmFsc2V9KS5wb3B1bGF0ZSgncXVlc3Rpb25zJylcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKGRldGhpKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnIpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG5cclxuICBhc3luYyBmaW5kT25lKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgICBjb25zdCBkZXRoaSA9IGF3YWl0IERldGhpLmZpbmRPbmUoe19pZDogaWQsIGlzX2RlbGV0ZWQ6IGZhbHNlfSkucG9wdWxhdGUoJ3F1ZXN0aW9ucycpO1xyXG4gICAgICBpZiAoIWRldGhpKSB7XHJcbiAgICAgICAgICByZXNwb25zZUFjdGlvbi5lcnJvcihyZXMsIDQwNCwgJycpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzLmpzb24oZGV0aGkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycik7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhc3luYyBkZWxldGUocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICAgIGNvbnN0IGRldGhpID0gYXdhaXQgRGV0aGkuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZDogaWQgfSwge2lzX2RlbGV0ZWQ6IHRydWV9LCB7IG5ldzogdHJ1ZSB9KTtcclxuICAgICAgaWYgKCFkZXRoaSkge1xyXG4gICAgICAgICAgcmVzcG9uc2VBY3Rpb24uZXJyb3IocmVzLCA0MDQsICcnKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlcy5qc29uKGRldGhpKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnIpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYXN5bmMgdXBkYXRlKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgICBsZXQgYm9keSA9IHJlcS5ib2R5XHJcbiAgICAgIGNvbnN0IGRldGhpID0gYXdhaXQgRGV0aGkuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZDogaWQgfSwgYm9keSwgeyBuZXc6IHRydWUgfSkucG9wdWxhdGUoJ3F1ZXN0aW9ucycpO1xyXG4gICAgICBpZiAoIWRldGhpKSB7XHJcbiAgICAgICAgICByZXNwb25zZUFjdGlvbi5lcnJvcihyZXMsIDQwNCwgJycpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzLmpzb24oZGV0aGkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgcmVzcG9uc2VBY3Rpb24uZXJyb3IocmVzLCA1MDAsIGVyci5lcnJvcnMpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYXN5bmMgZmluZEJ5RGF0ZShyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBkYXRlIH0gPSByZXEucGFyYW1zO1xyXG5cclxuICAgICAgbGV0IGRhdGVfdmFsID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgIGxldCBzdGFydERhdGUgPSBkYXRlX3ZhbC5zZXRIb3VycygwLCAwLCAwLCAwKVxyXG4gICAgICBsZXQgZW5kRGF0ZSA9IGRhdGVfdmFsLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSlcclxuICAgICAgbGV0IGRldGhpID0gYXdhaXQgRGV0aGkuZmluZE9uZSh7aXNfZGVsZXRlZDogZmFsc2UsIHRlc3RfZGF5OiB7JGd0ZTogc3RhcnREYXRlLCAkbHQ6IGVuZERhdGV9fSkuc29ydCh7Y3JlYXRlZF9hdDogLTF9KS5wb3B1bGF0ZSgncXVlc3Rpb25zJylcclxuICAgICAgaWYoZGV0aGkpe1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbihkZXRoaSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHtzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogJ05nw6B5IHRoaSBraMO0bmcgY8OzIMSR4buBIHRoaS4nfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgLypjb25zdCB7IGRhdGUgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICAgIGxldCBkYXRlRm9ybWF0ID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgIGxldCBkYXlEYXRlID0gZGF0ZUZvcm1hdC5nZXREYXRlKClcclxuICAgICAgbGV0IG1vbnRoRGF0ZSA9IGRhdGVGb3JtYXQuZ2V0TW9udGgoKSArIDFcclxuICAgICAgbGV0IHllYXJEYXRlID0gZGF0ZUZvcm1hdC5nZXRGdWxsWWVhcigpXHJcbiAgICAgIGNvbnNvbGUubG9nKGRheURhdGUsIG1vbnRoRGF0ZSwgeWVhckRhdGUpXHJcbiAgICAgIGNvbnN0IGRldGhpID0gYXdhaXQgRGV0aGkuYWdncmVnYXRlKFtcclxuICAgICAgICB7ICRtYXRjaDoge2lzX2RlbGV0ZWQ6IGZhbHNlfSB9LFxyXG4gICAgICAgIHsgJHNvcnQ6IHsgY3JlYXRlZF9hdDogLTEgfSB9LFxyXG4gICAgICAgIHskcHJvamVjdDoge19pZDogMSwgbW9udGg6IHsgJG1vbnRoOiBcIiR0ZXN0X2RheVwiIH0sIGRheTogeyAkZGF5T2ZNb250aDogXCIkdGVzdF9kYXlcIiB9LCB5ZWFyOiB7ICR5ZWFyOiBcIiR0ZXN0X2RheVwiIH19fSxcclxuICAgICAgICB7ICRtYXRjaDoge2RheTogZGF5RGF0ZSwgbW9udGg6IG1vbnRoRGF0ZSwgeWVhcjogeWVhckRhdGV9IH1cclxuICAgICAgXSk7XHJcblxyXG5cclxuICAgICAgaWYoZGV0aGkgJiYgZGV0aGkubGVuZ3RoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhkZXRoaVswXSlcclxuICAgICAgICBsZXQgX2lkID0gZGV0aGlbMF0uX2lkXHJcbiAgICAgICAgY29uc3QgZGV0aGlEYXRhID0gYXdhaXQgRGV0aGkuZmluZE9uZSh7X2lkOiBfaWR9KS5wb3B1bGF0ZSgncXVlc3Rpb25zJyk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKGRldGhpRGF0YSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbih7c3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdOZ8OgeSBraeG7g20gdHJhIGNoxrBhIGPDsyDEkeG7gSB0aGknfSk7XHJcbiAgICAgIH0qL1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgcmVzcG9uc2VBY3Rpb24uZXJyb3IocmVzLCA1MDAsIGVyci5lcnJvcnMpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcbiJdfQ==
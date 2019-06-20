'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _cauhoi = require('./cauhoi.model');

var _cauhoi2 = _interopRequireDefault(_cauhoi);

var _responseAction = require('../../utils/responseAction');

var responseAction = _interopRequireWildcard(_responseAction);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  create: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var body, cauhoi;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = req.body;

              console.log(body);
              _context.prev = 2;
              _context.next = 5;
              return _cauhoi2.default.create(body);

            case 5:
              cauhoi = _context.sent;
              return _context.abrupt('return', res.json(cauhoi));

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](2);

              console.error(_context.t0);
              responseAction.error(res, 500, _context.t0.errors);
              return _context.abrupt('return');

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[2, 9]]);
    }));

    function create(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return create;
  }(),
  findAll: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var cauhoi;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _cauhoi2.default.find({ is_deleted: false });

            case 3:
              cauhoi = _context2.sent;
              return _context2.abrupt('return', res.json(cauhoi));

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
      var id, cauhoi;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              id = req.params.id;
              _context3.next = 4;
              return _cauhoi2.default.findOne({ _id: id, is_deleted: false });

            case 4:
              cauhoi = _context3.sent;

              if (cauhoi) {
                _context3.next = 8;
                break;
              }

              responseAction.error(res, 404, '');
              return _context3.abrupt('return');

            case 8:
              return _context3.abrupt('return', res.json(cauhoi));

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
      var id, cauhoi;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              id = req.params.id;
              _context4.next = 4;
              return _cauhoi2.default.findOneAndUpdate({ _id: id }, { is_deleted: true }, { new: true });

            case 4:
              cauhoi = _context4.sent;

              if (cauhoi) {
                _context4.next = 8;
                break;
              }

              responseAction.error(res, 404, '');
              return _context4.abrupt('return');

            case 8:
              return _context4.abrupt('return', res.json(cauhoi));

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
      var id, body, cauhoi;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              id = req.params.id;
              body = req.body;
              _context5.next = 5;
              return _cauhoi2.default.findOneAndUpdate({ _id: id }, body, { new: true });

            case 5:
              cauhoi = _context5.sent;

              if (cauhoi) {
                _context5.next = 9;
                break;
              }

              responseAction.error(res, 404, '');
              return _context5.abrupt('return');

            case 9:
              return _context5.abrupt('return', res.json(cauhoi));

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
  uptImage: function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
      var filename, id, cauhoi, pathDel, cauhoi_upt;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              filename = req.file.filename;
              id = req.params.id;
              // lấy thông tin của cauhoi

              _context6.next = 5;
              return _cauhoi2.default.findById(id);

            case 5:
              cauhoi = _context6.sent;

              if (cauhoi && cauhoi.image) {
                pathDel = _path2.default.join(process.cwd(), "./uploads/" + cauhoi.image);

                _fs2.default.unlink(pathDel, function (err) {
                  if (err) throw err;
                  // if no error, file has been deleted successfully
                  console.log('File deleted!');
                });
              }

              _context6.next = 9;
              return _cauhoi2.default.findOneAndUpdate({ _id: id }, { image: filename }, { new: true });

            case 9:
              cauhoi_upt = _context6.sent;
              return _context6.abrupt('return', res.json(cauhoi_upt));

            case 13:
              _context6.prev = 13;
              _context6.t0 = _context6['catch'](0);

              console.error(_context6.t0);
              responseAction.error(res, 500, _context6.t0.errors);
              return _context6.abrupt('return');

            case 18:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this, [[0, 13]]);
    }));

    function uptImage(_x11, _x12) {
      return _ref6.apply(this, arguments);
    }

    return uptImage;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2NhdWhvaS9jYXVob2kuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJyZXNwb25zZUFjdGlvbiIsImNyZWF0ZSIsInJlcSIsInJlcyIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiQ2F1aG9pIiwiY2F1aG9pIiwianNvbiIsImVycm9yIiwiZXJyb3JzIiwiZmluZEFsbCIsImZpbmQiLCJpc19kZWxldGVkIiwic3RhdHVzIiwic2VuZCIsImZpbmRPbmUiLCJpZCIsInBhcmFtcyIsIl9pZCIsImRlbGV0ZSIsImZpbmRPbmVBbmRVcGRhdGUiLCJuZXciLCJ1cGRhdGUiLCJ1cHRJbWFnZSIsImZpbGVuYW1lIiwiZmlsZSIsImZpbmRCeUlkIiwiaW1hZ2UiLCJwYXRoRGVsIiwicGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZnMiLCJ1bmxpbmsiLCJlcnIiLCJjYXVob2lfdXB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0lBQVlBLGM7O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7a0JBRWU7QUFDUEMsUUFETztBQUFBLHlHQUNBQyxHQURBLEVBQ0tDLEdBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRVBDLGtCQUZPLEdBRUFGLElBQUlFLElBRko7O0FBR2RDLHNCQUFRQyxHQUFSLENBQVlGLElBQVo7QUFIYztBQUFBO0FBQUEscUJBS1lHLGlCQUFPTixNQUFQLENBQWNHLElBQWQsQ0FMWjs7QUFBQTtBQUtISSxvQkFMRztBQUFBLCtDQU1GTCxJQUFJTSxJQUFKLENBQVNELE1BQVQsQ0FORTs7QUFBQTtBQUFBO0FBQUE7O0FBUVRILHNCQUFRSyxLQUFSO0FBQ0VWLDZCQUFlVSxLQUFmLENBQXFCUCxHQUFyQixFQUEwQixHQUExQixFQUErQixZQUFJUSxNQUFuQztBQVRPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFB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bkMsSUFBSU0sSUFBSixDQUFTNkIsVUFBVCxDQXZGRTs7QUFBQTtBQUFBO0FBQUE7O0FBMEZUakMsc0JBQVFLLEtBQVI7QUFDQVYsNkJBQWVVLEtBQWYsQ0FBcUJQLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLGFBQUlRLE1BQW5DO0FBM0ZTOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiJjYXVob2kuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXVob2kgZnJvbSAnLi9jYXVob2kubW9kZWwnO1xyXG5pbXBvcnQgKiBhcyByZXNwb25zZUFjdGlvbiBmcm9tICcuLi8uLi91dGlscy9yZXNwb25zZUFjdGlvbidcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBhc3luYyBjcmVhdGUocmVxLCByZXMpIHtcclxuICAgIGxldCBib2R5ID0gcmVxLmJvZHlcclxuXHRjb25zb2xlLmxvZyhib2R5KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNhdWhvaSA9IGF3YWl0IENhdWhvaS5jcmVhdGUoYm9keSk7XHJcbiAgICAgIHJldHVybiByZXMuanNvbihjYXVob2kpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICByZXNwb25zZUFjdGlvbi5lcnJvcihyZXMsIDUwMCwgZXJyLmVycm9ycylcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICB9LFxyXG4gIGFzeW5jIGZpbmRBbGwocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBjb25zdCBjYXVob2kgPSBhd2FpdCBDYXVob2kuZmluZCh7aXNfZGVsZXRlZDogZmFsc2V9KVxyXG4gICAgICByZXR1cm4gcmVzLmpzb24oY2F1aG9pKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnIpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG5cclxuICBhc3luYyBmaW5kT25lKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG4gICAgICBjb25zdCBjYXVob2kgPSBhd2FpdCBDYXVob2kuZmluZE9uZSh7X2lkOiBpZCwgaXNfZGVsZXRlZDogZmFsc2V9KTtcclxuICAgICAgaWYgKCFjYXVob2kpIHtcclxuICAgICAgICAgIHJlc3BvbnNlQWN0aW9uLmVycm9yKHJlcywgNDA0LCAnJylcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXMuanNvbihjYXVob2kpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycik7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhc3luYyBkZWxldGUocmVxLCByZXMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcbiAgICAgIGNvbnN0IGNhdWhvaSA9IGF3YWl0IENhdWhvaS5maW5kT25lQW5kVXBkYXRlKHsgX2lkOiBpZCB9LCB7aXNfZGVsZXRlZDogdHJ1ZX0sIHsgbmV3OiB0cnVlIH0pO1xyXG4gICAgICBpZiAoIWNhdWhvaSkge1xyXG4gICAgICAgICAgcmVzcG9uc2VBY3Rpb24uZXJyb3IocmVzLCA0MDQsICcnKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlcy5qc29uKGNhdWhvaSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGFzeW5jIHVwZGF0ZShyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuICAgICAgbGV0IGJvZHkgPSByZXEuYm9keVxyXG4gICAgICBjb25zdCBjYXVob2kgPSBhd2FpdCBDYXVob2kuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZDogaWQgfSwgYm9keSwgeyBuZXc6IHRydWUgfSk7XHJcbiAgICAgIGlmICghY2F1aG9pKSB7XHJcbiAgICAgICAgICByZXNwb25zZUFjdGlvbi5lcnJvcihyZXMsIDQwNCwgJycpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzLmpzb24oY2F1aG9pKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJlc3BvbnNlQWN0aW9uLmVycm9yKHJlcywgNTAwLCBlcnIuZXJyb3JzKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBhc3luYyB1cHRJbWFnZShyZXEsIHJlcyl7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgbGV0IHtmaWxlbmFtZX0gPSByZXEuZmlsZVxyXG4gICAgICBsZXQge2lkfSA9IHJlcS5wYXJhbXNcclxuICAgICAgLy8gbOG6pXkgdGjDtG5nIHRpbiBj4bunYSBjYXVob2lcclxuICAgICAgbGV0IGNhdWhvaSA9IGF3YWl0IENhdWhvaS5maW5kQnlJZChpZClcclxuICAgICAgaWYoY2F1aG9pICYmIGNhdWhvaS5pbWFnZSl7XHJcbiAgICAgICAgbGV0IHBhdGhEZWwgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCIuL3VwbG9hZHMvXCIgKyBjYXVob2kuaW1hZ2UpXHJcbiAgICAgICAgZnMudW5saW5rKHBhdGhEZWwsIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuICAgICAgICAgIC8vIGlmIG5vIGVycm9yLCBmaWxlIGhhcyBiZWVuIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnRmlsZSBkZWxldGVkIScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY2F1aG9pX3VwdCA9IGF3YWl0IENhdWhvaS5maW5kT25lQW5kVXBkYXRlKHsgX2lkOiBpZCB9LCB7aW1hZ2U6IGZpbGVuYW1lfSwgeyBuZXc6IHRydWUgfSk7XHJcbiAgICAgIHJldHVybiByZXMuanNvbihjYXVob2lfdXB0KTtcclxuICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICByZXNwb25zZUFjdGlvbi5lcnJvcihyZXMsIDUwMCwgZXJyLmVycm9ycylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gIH1cclxufTtcclxuIl19
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  create: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var filename;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(req.file);
              _context.prev = 1;
              filename = req.file.filename;
              return _context.abrupt("return", res.status(200).send({ success: true, images: filename }));

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](1);

              console.error(_context.t0);
              return _context.abrupt("return", res.status(500).send(_context.t0));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 6]]);
    }));

    function create(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return create;
  }(),
  getImageByName: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var imgNm;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              imgNm = req.params.imgNm;
              return _context2.abrupt("return", res.sendFile(_path2.default.join(process.cwd(), "./uploads/" + imgNm)));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getImageByName(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return getImageByName;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ltZ1VwbG9hZC9pbWdVcGxvYWQuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGUiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZmlsZSIsImZpbGVuYW1lIiwic3RhdHVzIiwic2VuZCIsInN1Y2Nlc3MiLCJpbWFnZXMiLCJlcnJvciIsImdldEltYWdlQnlOYW1lIiwiaW1nTm0iLCJwYXJhbXMiLCJzZW5kRmlsZSIsInBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O2tCQUVlO0FBQ1BBLFFBRE87QUFBQSx5R0FDQUMsR0FEQSxFQUNLQyxHQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVYQyxzQkFBUUMsR0FBUixDQUFZSCxJQUFJSSxJQUFoQjtBQUZXO0FBSUpDLHNCQUpJLEdBSVFMLElBQUlJLElBSlosQ0FJSkMsUUFKSTtBQUFBLCtDQUtGSixJQUFJSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsRUFBRUMsU0FBUyxJQUFYLEVBQWlCQyxRQUFRSixRQUF6QixFQUFyQixDQUxFOztBQUFBO0FBQUE7QUFBQTs7QUFPVEgsc0JBQVFRLEtBQVI7QUFQUywrQ0FRRlQsSUFBSUssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLGFBUkU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFXUEksZ0JBWE87QUFBQSwyR0FXUVgsR0FYUixFQVdhQyxHQVhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlQVyxtQkFaTyxHQVlDWixJQUFJYSxNQUFKLENBQVdELEtBWlo7QUFBQSxnREFjSlgsSUFBSWEsUUFBSixDQUFhQyxlQUFLQyxJQUFMLENBQVVDLFFBQVFDLEdBQVIsRUFBVixFQUF5QixlQUFlTixLQUF4QyxDQUFiLENBZEk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6ImltZ1VwbG9hZC5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYXN5bmMgY3JlYXRlKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXEuZmlsZSlcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCB7ZmlsZW5hbWV9ID0gcmVxLmZpbGVcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgc3VjY2VzczogdHJ1ZSwgaW1hZ2VzOiBmaWxlbmFtZSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnIpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYXN5bmMgZ2V0SW1hZ2VCeU5hbWUocmVxLCByZXMpe1xyXG4gICAgbGV0IGltZ05tID0gcmVxLnBhcmFtcy5pbWdObVxyXG5cclxuICAgIHJldHVybiByZXMuc2VuZEZpbGUocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiLi91cGxvYWRzL1wiICsgaW1nTm0pKTtcclxuICB9XHJcbn07XHJcbiJdfQ==
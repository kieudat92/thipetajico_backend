'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _db = require('./config/db');

var _api = require('./api');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var os = require('os');
var ipLocal = '';
var ifaces = os.networkInterfaces();

(0, _keys2.default)(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      //console.log(ifname + ':' + alias, iface.address);
      ipLocal = iface.address;
    } else {
      // this interface has only one ipv4 adress
      //console.log(ifname, iface.address);
      ipLocal = iface.address;
    }
    ++alias;
  });
});

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3001;

(0, _db.connect)();
app.use(_express2.default.json());

app.use(_bodyParser2.default.json({ limit: '50mb' }));
app.use(_bodyParser2.default.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));
app.use(_express2.default.urlencoded({ extended: true }));

app.use('/api', _api.restRouter);

app.use(function (req, res, next) {
  var error = new Error('Not found');
  error.message = 'Invalid route';
  error.status = 404;
  next(error);
});
app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message
    }
  });
});

app.listen(PORT, ipLocal, function () {
  console.log('PORT: ' + ipLocal + ':' + PORT);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsib3MiLCJyZXF1aXJlIiwiaXBMb2NhbCIsImlmYWNlcyIsIm5ldHdvcmtJbnRlcmZhY2VzIiwiZm9yRWFjaCIsImlmbmFtZSIsImFsaWFzIiwiaWZhY2UiLCJmYW1pbHkiLCJpbnRlcm5hbCIsImFkZHJlc3MiLCJhcHAiLCJQT1JUIiwicHJvY2VzcyIsImVudiIsInVzZSIsImV4cHJlc3MiLCJqc29uIiwiYm9keVBhcnNlciIsImxpbWl0IiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicGFyYW1ldGVyTGltaXQiLCJyZXN0Um91dGVyIiwicmVxIiwicmVzIiwibmV4dCIsImVycm9yIiwiRXJyb3IiLCJtZXNzYWdlIiwic3RhdHVzIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsS0FBS0MsUUFBUSxJQUFSLENBQVQ7QUFDQSxJQUFJQyxVQUFVLEVBQWQ7QUFDQSxJQUFJQyxTQUFTSCxHQUFHSSxpQkFBSCxFQUFiOztBQUVBLG9CQUFZRCxNQUFaLEVBQW9CRSxPQUFwQixDQUE0QixVQUFVQyxNQUFWLEVBQWtCO0FBQzVDLE1BQUlDLFFBQVEsQ0FBWjs7QUFFQUosU0FBT0csTUFBUCxFQUFlRCxPQUFmLENBQXVCLFVBQVVHLEtBQVYsRUFBaUI7QUFDdEMsUUFBSSxXQUFXQSxNQUFNQyxNQUFqQixJQUEyQkQsTUFBTUUsUUFBTixLQUFtQixLQUFsRCxFQUF5RDtBQUN2RDtBQUNBO0FBQ0Q7O0FBRUQsUUFBSUgsU0FBUyxDQUFiLEVBQWdCO0FBQ2Q7QUFDQTtBQUNBTCxnQkFBVU0sTUFBTUcsT0FBaEI7QUFDRCxLQUpELE1BSU87QUFDTDtBQUNBO0FBQ0FULGdCQUFVTSxNQUFNRyxPQUFoQjtBQUNEO0FBQ0QsTUFBRUosS0FBRjtBQUNELEdBaEJEO0FBaUJELENBcEJEOztBQXNCQSxJQUFNSyxNQUFNLHdCQUFaO0FBQ0EsSUFBTUMsT0FBT0MsUUFBUUMsR0FBUixDQUFZRixJQUFaLElBQW9CLElBQWpDOztBQUVBO0FBQ0FELElBQUlJLEdBQUosQ0FBUUMsa0JBQVFDLElBQVIsRUFBUjs7QUFFQU4sSUFBSUksR0FBSixDQUFRRyxxQkFBV0QsSUFBWCxDQUFnQixFQUFDRSxPQUFPLE1BQVIsRUFBaEIsQ0FBUjtBQUNBUixJQUFJSSxHQUFKLENBQVFHLHFCQUFXRSxVQUFYLENBQXNCLEVBQUNELE9BQU8sTUFBUixFQUFnQkUsVUFBVSxJQUExQixFQUFnQ0MsZ0JBQWdCLE9BQWhELEVBQXRCLENBQVI7QUFDQVgsSUFBSUksR0FBSixDQUFRQyxrQkFBUUksVUFBUixDQUFtQixFQUFFQyxVQUFVLElBQVosRUFBbkIsQ0FBUjs7QUFHQVYsSUFBSUksR0FBSixDQUFRLE1BQVIsRUFBZ0JRLGVBQWhCOztBQUVBWixJQUFJSSxHQUFKLENBQVEsVUFBQ1MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsRUFBb0I7QUFDMUIsTUFBTUMsUUFBUSxJQUFJQyxLQUFKLENBQVUsV0FBVixDQUFkO0FBQ0FELFFBQU1FLE9BQU4sR0FBZ0IsZUFBaEI7QUFDQUYsUUFBTUcsTUFBTixHQUFlLEdBQWY7QUFDQUosT0FBS0MsS0FBTDtBQUNELENBTEQ7QUFNQWhCLElBQUlJLEdBQUosQ0FBUSxVQUFDWSxLQUFELEVBQVFILEdBQVIsRUFBYUMsR0FBYixFQUFrQkMsSUFBbEIsRUFBMkI7QUFDakNELE1BQUlLLE1BQUosQ0FBV0gsTUFBTUcsTUFBTixJQUFnQixHQUEzQjtBQUNBLFNBQU9MLElBQUlSLElBQUosQ0FBUztBQUNkVSxXQUFPO0FBQ0xFLGVBQVNGLE1BQU1FO0FBRFY7QUFETyxHQUFULENBQVA7QUFLRCxDQVBEOztBQVNBbEIsSUFBSW9CLE1BQUosQ0FBV25CLElBQVgsRUFBaUJYLE9BQWpCLEVBQTBCLFlBQU07QUFDOUIrQixVQUFRQyxHQUFSLENBQVksV0FBV2hDLE9BQVgsR0FBcUIsR0FBckIsR0FBMkJXLElBQXZDO0FBQ0QsQ0FGRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGxvZ2dlciBmcm9tICdtb3JnYW4nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnLi9jb25maWcvZGInO1xyXG5pbXBvcnQgeyByZXN0Um91dGVyIH0gZnJvbSAnLi9hcGknO1xyXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20ncGF0aCdcclxuXHJcbnZhciBvcyA9IHJlcXVpcmUoJ29zJyk7XHJcbmxldCBpcExvY2FsID0gJydcclxudmFyIGlmYWNlcyA9IG9zLm5ldHdvcmtJbnRlcmZhY2VzKCk7XHJcblxyXG5PYmplY3Qua2V5cyhpZmFjZXMpLmZvckVhY2goZnVuY3Rpb24gKGlmbmFtZSkge1xyXG4gIHZhciBhbGlhcyA9IDA7XHJcblxyXG4gIGlmYWNlc1tpZm5hbWVdLmZvckVhY2goZnVuY3Rpb24gKGlmYWNlKSB7XHJcbiAgICBpZiAoJ0lQdjQnICE9PSBpZmFjZS5mYW1pbHkgfHwgaWZhY2UuaW50ZXJuYWwgIT09IGZhbHNlKSB7XHJcbiAgICAgIC8vIHNraXAgb3ZlciBpbnRlcm5hbCAoaS5lLiAxMjcuMC4wLjEpIGFuZCBub24taXB2NCBhZGRyZXNzZXNcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhbGlhcyA+PSAxKSB7XHJcbiAgICAgIC8vIHRoaXMgc2luZ2xlIGludGVyZmFjZSBoYXMgbXVsdGlwbGUgaXB2NCBhZGRyZXNzZXNcclxuICAgICAgLy9jb25zb2xlLmxvZyhpZm5hbWUgKyAnOicgKyBhbGlhcywgaWZhY2UuYWRkcmVzcyk7XHJcbiAgICAgIGlwTG9jYWwgPSBpZmFjZS5hZGRyZXNzXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyB0aGlzIGludGVyZmFjZSBoYXMgb25seSBvbmUgaXB2NCBhZHJlc3NcclxuICAgICAgLy9jb25zb2xlLmxvZyhpZm5hbWUsIGlmYWNlLmFkZHJlc3MpO1xyXG4gICAgICBpcExvY2FsID0gaWZhY2UuYWRkcmVzc1xyXG4gICAgfVxyXG4gICAgKythbGlhcztcclxuICB9KTtcclxufSk7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDE7XHJcblxyXG5jb25uZWN0KCk7XHJcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xyXG5cclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oe2xpbWl0OiAnNTBtYid9KSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtsaW1pdDogJzUwbWInLCBleHRlbmRlZDogdHJ1ZSwgcGFyYW1ldGVyTGltaXQ6IDEwMDAwMDB9KSk7XHJcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xyXG5cclxuXHJcbmFwcC51c2UoJy9hcGknLCByZXN0Um91dGVyKTtcclxuXHJcbmFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoJ05vdCBmb3VuZCcpO1xyXG4gIGVycm9yLm1lc3NhZ2UgPSAnSW52YWxpZCByb3V0ZSc7XHJcbiAgZXJyb3Iuc3RhdHVzID0gNDA0O1xyXG4gIG5leHQoZXJyb3IpO1xyXG59KTtcclxuYXBwLnVzZSgoZXJyb3IsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgcmVzLnN0YXR1cyhlcnJvci5zdGF0dXMgfHwgNTAwKTtcclxuICByZXR1cm4gcmVzLmpzb24oe1xyXG4gICAgZXJyb3I6IHtcclxuICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuYXBwLmxpc3RlbihQT1JULCBpcExvY2FsLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ1BPUlQ6ICcgKyBpcExvY2FsICsgJzonICsgUE9SVClcclxufSk7XHJcbiJdfQ==
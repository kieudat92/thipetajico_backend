'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imgUploadRouter = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _imgUpload = require('./imgUpload.controller');

var _imgUpload2 = _interopRequireDefault(_imgUpload);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = _multer2.default.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname);
  }
});

function extFile(req, file, cb) {
  if (!file.originalname.match(/\.(jpg|png|jpeg|gif)$/)) {
    return cb(new Error('Ảnh không đúng định dạng'));
  } else {
    cb(null, true);
  }
}

var upload = (0, _multer2.default)({ storage: storage, fileFilter: extFile });

function checkUploadPath(req, res, next) {
  var path = './uploads';
  _fs2.default.exists(path, function (exists) {
    if (exists) {
      next();
    } else {
      _fs2.default.mkdir(path, function (err) {
        if (err) {
          console.log('Error in folder creation');
          next();
        }
        next();
      });
    }
  });
}

var imgUploadRouter = exports.imgUploadRouter = _express2.default.Router();
imgUploadRouter.route('/').post(checkUploadPath, upload.single('image'), _imgUpload2.default.create);

imgUploadRouter.get('/:imgNm', _imgUpload2.default.getImageByName);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2ltZ1VwbG9hZC9pbWdVcGxvYWQucm91dGVyLmpzIl0sIm5hbWVzIjpbInN0b3JhZ2UiLCJtdWx0ZXIiLCJkaXNrU3RvcmFnZSIsImRlc3RpbmF0aW9uIiwicmVxIiwiZmlsZSIsImNiIiwiZmlsZW5hbWUiLCJEYXRlIiwibm93Iiwib3JpZ2luYWxuYW1lIiwiZXh0RmlsZSIsIm1hdGNoIiwiRXJyb3IiLCJ1cGxvYWQiLCJmaWxlRmlsdGVyIiwiY2hlY2tVcGxvYWRQYXRoIiwicmVzIiwibmV4dCIsInBhdGgiLCJmcyIsImV4aXN0cyIsIm1rZGlyIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImltZ1VwbG9hZFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJyb3V0ZSIsInBvc3QiLCJzaW5nbGUiLCJpbWdVcGxvYWRDb250cm9sbGVyIiwiY3JlYXRlIiwiZ2V0IiwiZ2V0SW1hZ2VCeU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsVUFBVUMsaUJBQU9DLFdBQVAsQ0FBbUI7QUFDL0JDLGVBQWEscUJBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQkMsRUFBckIsRUFBeUI7QUFDcENBLE9BQUcsSUFBSCxFQUFTLFdBQVQ7QUFDRCxHQUg4QjtBQUkvQkMsWUFBVSxrQkFBVUgsR0FBVixFQUFlQyxJQUFmLEVBQXFCQyxFQUFyQixFQUF5QjtBQUNqQ0EsT0FBRyxJQUFILEVBQVNFLEtBQUtDLEdBQUwsS0FBYSxHQUFiLEdBQW1CSixLQUFLSyxZQUFqQztBQUNEO0FBTjhCLENBQW5CLENBQWQ7O0FBU0EsU0FBU0MsT0FBVCxDQUFpQlAsR0FBakIsRUFBc0JDLElBQXRCLEVBQTRCQyxFQUE1QixFQUFnQztBQUM5QixNQUFHLENBQUNELEtBQUtLLFlBQUwsQ0FBa0JFLEtBQWxCLENBQXdCLHVCQUF4QixDQUFKLEVBQXFEO0FBQ25ELFdBQU9OLEdBQUcsSUFBSU8sS0FBSixDQUFVLDBCQUFWLENBQUgsQ0FBUDtBQUNELEdBRkQsTUFFSztBQUNIUCxPQUFHLElBQUgsRUFBUyxJQUFUO0FBQ0Q7QUFDRjs7QUFFRCxJQUFJUSxTQUFTLHNCQUFPLEVBQUVkLFNBQVNBLE9BQVgsRUFBb0JlLFlBQVlKLE9BQWhDLEVBQVAsQ0FBYjs7QUFFQSxTQUFTSyxlQUFULENBQXlCWixHQUF6QixFQUE4QmEsR0FBOUIsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ3ZDLE1BQUlDLE9BQU8sV0FBWDtBQUNBQyxlQUFHQyxNQUFILENBQVVGLElBQVYsRUFBZ0IsVUFBU0UsTUFBVCxFQUFpQjtBQUMvQixRQUFHQSxNQUFILEVBQVc7QUFDVEg7QUFDRCxLQUZELE1BR0s7QUFDSEUsbUJBQUdFLEtBQUgsQ0FBU0gsSUFBVCxFQUFlLFVBQVNJLEdBQVQsRUFBYztBQUMzQixZQUFHQSxHQUFILEVBQVE7QUFDTkMsa0JBQVFDLEdBQVIsQ0FBWSwwQkFBWjtBQUNBUDtBQUNEO0FBQ0RBO0FBQ0QsT0FORDtBQU9EO0FBQ0YsR0FiRDtBQWNEOztBQUVNLElBQU1RLDRDQUFrQkMsa0JBQVFDLE1BQVIsRUFBeEI7QUFDUEYsZ0JBQ0dHLEtBREgsQ0FDUyxHQURULEVBRUdDLElBRkgsQ0FFUWQsZUFGUixFQUV5QkYsT0FBT2lCLE1BQVAsQ0FBYyxPQUFkLENBRnpCLEVBRWlEQyxvQkFBb0JDLE1BRnJFOztBQUlBUCxnQkFBZ0JRLEdBQWhCLENBQW9CLFNBQXBCLEVBQStCRixvQkFBb0JHLGNBQW5EIiwiZmlsZSI6ImltZ1VwbG9hZC5yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGltZ1VwbG9hZENvbnRyb2xsZXIgZnJvbSAnLi9pbWdVcGxvYWQuY29udHJvbGxlcic7XHJcbmltcG9ydCBtdWx0ZXIgZnJvbSAnbXVsdGVyJ1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnXHJcblxyXG5sZXQgc3RvcmFnZSA9IG11bHRlci5kaXNrU3RvcmFnZSh7XHJcbiAgZGVzdGluYXRpb246IGZ1bmN0aW9uIChyZXEsIGZpbGUsIGNiKSB7XHJcbiAgICBjYihudWxsLCAnLi91cGxvYWRzJylcclxuICB9LFxyXG4gIGZpbGVuYW1lOiBmdW5jdGlvbiAocmVxLCBmaWxlLCBjYikge1xyXG4gICAgY2IobnVsbCwgRGF0ZS5ub3coKSArICdfJyArIGZpbGUub3JpZ2luYWxuYW1lICApXHJcbiAgfVxyXG59KVxyXG5cclxuZnVuY3Rpb24gZXh0RmlsZShyZXEsIGZpbGUsIGNiKSB7XHJcbiAgaWYoIWZpbGUub3JpZ2luYWxuYW1lLm1hdGNoKC9cXC4oanBnfHBuZ3xqcGVnfGdpZikkLykpe1xyXG4gICAgcmV0dXJuIGNiKG5ldyBFcnJvcign4bqibmgga2jDtG5nIMSRw7puZyDEkeG7i25oIGThuqFuZycpKVxyXG4gIH1lbHNle1xyXG4gICAgY2IobnVsbCwgdHJ1ZSlcclxuICB9XHJcbn1cclxuXHJcbmxldCB1cGxvYWQgPSBtdWx0ZXIoeyBzdG9yYWdlOiBzdG9yYWdlLCBmaWxlRmlsdGVyOiBleHRGaWxlIH0pXHJcblxyXG5mdW5jdGlvbiBjaGVja1VwbG9hZFBhdGgocmVxLCByZXMsIG5leHQpIHtcclxuICBsZXQgcGF0aCA9ICcuL3VwbG9hZHMnO1xyXG4gIGZzLmV4aXN0cyhwYXRoLCBmdW5jdGlvbihleGlzdHMpIHtcclxuICAgIGlmKGV4aXN0cykge1xyXG4gICAgICBuZXh0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgZnMubWtkaXIocGF0aCwgZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgaWYoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gZm9sZGVyIGNyZWF0aW9uJyk7XHJcbiAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5leHQoKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW1nVXBsb2FkUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuaW1nVXBsb2FkUm91dGVyXHJcbiAgLnJvdXRlKCcvJylcclxuICAucG9zdChjaGVja1VwbG9hZFBhdGgsIHVwbG9hZC5zaW5nbGUoJ2ltYWdlJyksIGltZ1VwbG9hZENvbnRyb2xsZXIuY3JlYXRlKVxyXG5cclxuaW1nVXBsb2FkUm91dGVyLmdldCgnLzppbWdObScsIGltZ1VwbG9hZENvbnRyb2xsZXIuZ2V0SW1hZ2VCeU5hbWUpXHJcbiJdfQ==
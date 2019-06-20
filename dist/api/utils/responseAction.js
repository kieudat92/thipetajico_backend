'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error = error;
function error(res) {
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
  var messageErr = arguments[2];

  var response = {
    success: false,
    message: 'Có lỗi xảy ra, vui lòng liên hệ quản trị viên.'
  };
  if (code === 400 && messageErr && messageErr.message) {
    response.message = messageErr.message;
  } else if (code === 500 && messageErr && messageErr.code) {
    response.message = messageErr.code.message;
  } else if (code === 404) {
    response.message = 'Dữ liệu không tồn tại, vui lòng kiểm tra và thử lại.';
  } else if (code === 401) {
    response.message = 'Api không có token hoặc không đúng định dạng';
  }
  return res.status(code).json(response);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvdXRpbHMvcmVzcG9uc2VBY3Rpb24uanMiXSwibmFtZXMiOlsiZXJyb3IiLCJyZXMiLCJjb2RlIiwibWVzc2FnZUVyciIsInJlc3BvbnNlIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7OztRQUFnQkEsSyxHQUFBQSxLO0FBQVQsU0FBU0EsS0FBVCxDQUFlQyxHQUFmLEVBQTRDO0FBQUEsTUFBeEJDLElBQXdCLHVFQUFqQixHQUFpQjtBQUFBLE1BQVpDLFVBQVk7O0FBQ2pELE1BQUlDLFdBQVc7QUFDYkMsYUFBUyxLQURJO0FBRWJDLGFBQVM7QUFGSSxHQUFmO0FBSUEsTUFBR0osU0FBUyxHQUFULElBQWdCQyxVQUFoQixJQUE4QkEsV0FBV0csT0FBNUMsRUFBb0Q7QUFDbERGLGFBQVNFLE9BQVQsR0FBbUJILFdBQVdHLE9BQTlCO0FBQ0QsR0FGRCxNQUVNLElBQUdKLFNBQVMsR0FBVCxJQUFnQkMsVUFBaEIsSUFBOEJBLFdBQVdELElBQTVDLEVBQWlEO0FBQ3JERSxhQUFTRSxPQUFULEdBQW1CSCxXQUFXRCxJQUFYLENBQWdCSSxPQUFuQztBQUNELEdBRkssTUFFQSxJQUFHSixTQUFTLEdBQVosRUFBZ0I7QUFDbEJFLGFBQVNFLE9BQVQsR0FBbUIsc0RBQW5CO0FBQ0gsR0FGSyxNQUVBLElBQUdKLFNBQVMsR0FBWixFQUFnQjtBQUNwQkUsYUFBU0UsT0FBVCxHQUFtQiw4Q0FBbkI7QUFDRDtBQUNELFNBQU9MLElBQUlNLE1BQUosQ0FBV0wsSUFBWCxFQUFpQk0sSUFBakIsQ0FBc0JKLFFBQXRCLENBQVA7QUFDRCIsImZpbGUiOiJyZXNwb25zZUFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBlcnJvcihyZXMsIGNvZGUgPSA0MDAsIG1lc3NhZ2VFcnIpIHtcclxuICBsZXQgcmVzcG9uc2UgPSB7XHJcbiAgICBzdWNjZXNzOiBmYWxzZSxcclxuICAgIG1lc3NhZ2U6ICdDw7MgbOG7l2kgeOG6o3kgcmEsIHZ1aSBsw7JuZyBsacOqbiBo4buHIHF14bqjbiB0cuG7iyB2acOqbi4nXHJcbiAgfTtcclxuICBpZihjb2RlID09PSA0MDAgJiYgbWVzc2FnZUVyciAmJiBtZXNzYWdlRXJyLm1lc3NhZ2Upe1xyXG4gICAgcmVzcG9uc2UubWVzc2FnZSA9IG1lc3NhZ2VFcnIubWVzc2FnZVxyXG4gIH1lbHNlIGlmKGNvZGUgPT09IDUwMCAmJiBtZXNzYWdlRXJyICYmIG1lc3NhZ2VFcnIuY29kZSl7XHJcbiAgICByZXNwb25zZS5tZXNzYWdlID0gbWVzc2FnZUVyci5jb2RlLm1lc3NhZ2VcclxuICB9ZWxzZSBpZihjb2RlID09PSA0MDQpe1xyXG4gICAgICByZXNwb25zZS5tZXNzYWdlID0gJ0Thu68gbGnhu4d1IGtow7RuZyB04buTbiB04bqhaSwgdnVpIGzDsm5nIGtp4buDbSB0cmEgdsOgIHRo4butIGzhuqFpLidcclxuICB9ZWxzZSBpZihjb2RlID09PSA0MDEpe1xyXG4gICAgcmVzcG9uc2UubWVzc2FnZSA9ICdBcGkga2jDtG5nIGPDsyB0b2tlbiBob+G6t2Mga2jDtG5nIMSRw7puZyDEkeG7i25oIGThuqFuZydcclxuICB9XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoY29kZSkuanNvbihyZXNwb25zZSk7XHJcbn0iXX0=
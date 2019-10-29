'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var dethiSchema = new Schema({
  test_day: { type: Date },
  questions: [{
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'Cauhoi',
    required: true
  }],
  is_deleted: { type: Boolean, default: false, select: false }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
exports.default = _mongoose2.default.model('Dethi', dethiSchema);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL2RldGhpL2RldGhpLm1vZGVsLmpzIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vbmdvb3NlIiwiZGV0aGlTY2hlbWEiLCJ0ZXN0X2RheSIsInR5cGUiLCJEYXRlIiwicXVlc3Rpb25zIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInJlcXVpcmVkIiwiaXNfZGVsZXRlZCIsIkJvb2xlYW4iLCJkZWZhdWx0Iiwic2VsZWN0IiwidGltZXN0YW1wcyIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0lBRVFBLE0sR0FBV0Msa0IsQ0FBWEQsTTs7QUFDUixJQUFNRSxjQUFjLElBQUlGLE1BQUosQ0FBVztBQUM3QkcsWUFBVSxFQUFFQyxNQUFNQyxJQUFSLEVBRG1CO0FBRTdCQyxhQUFXLENBQUM7QUFDVkYsVUFBTUgsbUJBQVNELE1BQVQsQ0FBZ0JPLEtBQWhCLENBQXNCQyxRQURsQjtBQUVWQyxTQUFLLFFBRks7QUFHVkMsY0FBVTtBQUhBLEdBQUQsQ0FGa0I7QUFPN0JDLGNBQVksRUFBQ1AsTUFBTVEsT0FBUCxFQUFnQkMsU0FBUyxLQUF6QixFQUFnQ0MsUUFBUSxLQUF4QztBQVBpQixDQUFYLEVBUWpCO0FBQ0RDLGNBQVk7QUFDVkMsZUFBVyxZQUREO0FBRVZDLGVBQVc7QUFGRDtBQURYLENBUmlCLENBQXBCO2tCQWNlaEIsbUJBQVNpQixLQUFULENBQWUsT0FBZixFQUF3QmhCLFdBQXhCLEMiLCJmaWxlIjoiZGV0aGkubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xyXG5jb25zdCBkZXRoaVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIHRlc3RfZGF5OiB7IHR5cGU6IERhdGUgfSxcclxuICBxdWVzdGlvbnM6IFt7XHJcbiAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICByZWY6ICdDYXVob2knLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICB9XSxcclxuICBpc19kZWxldGVkOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UsIHNlbGVjdDogZmFsc2V9XHJcbn0sIHtcclxuICB0aW1lc3RhbXBzOiB7XHJcbiAgICBjcmVhdGVkQXQ6ICdjcmVhdGVkX2F0JyxcclxuICAgIHVwZGF0ZWRBdDogJ3VwZGF0ZWRfYXQnLFxyXG4gIH1cclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKCdEZXRoaScsIGRldGhpU2NoZW1hKTtcclxuIl19
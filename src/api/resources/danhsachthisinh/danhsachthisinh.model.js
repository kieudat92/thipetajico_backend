import mongoose from 'mongoose';

const { Schema } = mongoose;
const danhsachthisinhSchema = new Schema({
  maso: { type: String, required: true },
  name: { type: String, required: true },
  dsach: {type: String, required: true},
  ngaythi: { type: Date },
  login_status:  {type: Boolean, required: true, default: false},
  is_deleted: {type: Boolean, default: false, select: false}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});
export default mongoose.model('danhsachthisinh', danhsachthisinhSchema);

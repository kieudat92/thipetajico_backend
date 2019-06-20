import mongoose from 'mongoose';

const { Schema } = mongoose;
const testerSchema = new Schema({
  full_name: { type: String, required: true },
  maso: { type: String, required: true },
  so_cau_dung: { type: Number, default: 0 , required: true},
  so_cau_sai: { type: Number, default: 0 , required: true},
  thoi_gian_cong_them: { type: Number, default: 0 , required: true},
  thoi_gian_lam_bai: { type: Number, default: 0 , required: true},
  dethi: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dethi',
    required: true
  },
  answer: [],
  is_deleted: {type: Boolean, default: false, select: false}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});
export default mongoose.model('Tester', testerSchema);

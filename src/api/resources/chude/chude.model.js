import mongoose from 'mongoose';

const { Schema } = mongoose;
const chudeSchema = new Schema({
  name: { type: String, required: true },
  remark: { type: String },
  is_deleted: {type: Boolean, default: false, select: false}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});
export default mongoose.model('Chude', chudeSchema);

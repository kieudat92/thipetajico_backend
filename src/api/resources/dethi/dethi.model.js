import mongoose from 'mongoose';

const { Schema } = mongoose;
const dethiSchema = new Schema({
  test_day: { type: Date },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cauhoi',
    required: true
  }],
  is_deleted: {type: Boolean, default: false, select: false}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});
export default mongoose.model('Dethi', dethiSchema);

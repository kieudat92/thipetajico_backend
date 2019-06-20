import mongoose from 'mongoose';

const { Schema } = mongoose;
const cauhoiSchema = new Schema({
  image: { type: String },
  question: { type: Number, default: 1 },
  answer: [],
  is_deleted: {type: Boolean, default: false, select: false},
  chude_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chude',
    required: true
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});
export default mongoose.model('Cauhoi', cauhoiSchema);

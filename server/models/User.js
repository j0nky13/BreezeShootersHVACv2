import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['guest', 'customer', 'admin'], default: 'guest' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('User', UserSchema);

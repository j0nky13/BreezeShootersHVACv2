import mongoose from 'mongoose';

const simpleuploadSchema = new mongoose.Schema({
  name: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Simpleupload', simpleuploadSchema);

import mongoose from 'mongoose';

export const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  if (!MONGO_URI) {
    throw new Error('MONGO URI must be defined.');
  }

  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    throw new Error('Connection with MongoDB failed with message: ' + err);
  }
}
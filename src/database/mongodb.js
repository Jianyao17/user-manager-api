import mongoose from 'mongoose';
import 'dotenv/config';

const connectDB = async () => 
{
  try 
  {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
    
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected. Attempting to reconnect...');
  });

  mongoose.connection.on('reconnected', () => {
    console.log('MongoDB reconnected!');
  });
};

export default connectDB;
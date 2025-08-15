import mongoose from 'mongoose';

const checkDbConnection = (req, res, next) => 
{
  // readyState 1 berarti 'connected'
  if (mongoose.connection.readyState === 1) {
    return next();
  }
  
  // Jika tidak terhubung, kirim response 503 Service Unavailable
  return res
    .status(503)
    .json({
      code: 503,
      message: 'Service temporarily unavailable. Cannot connect to the database.',
    });
};

export default checkDbConnection;
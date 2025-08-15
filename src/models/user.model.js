import mongoose from 'mongoose';

// Definisikan skema untuk User
const UserSchema = new mongoose.Schema(
{
  nama: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  nomorTelepon: { type: String, required: true },
  statusAktif: { type: Boolean, default: true },
  departemen: { type: String, required: true },
  
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

export default User;
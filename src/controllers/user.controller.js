import User from '../models/user.model.js';

// Create a new user
export const createUser = async (req, res, next) => 
{
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) 
    {
      return res
        .status(409)
        .json({ 
          code: 409,
          message: "Email sudah terdaftar." 
        });
    }

    const user = await User.create(req.body);
    res
      .status(201)
      .json({ 
        code: 201,
        message: "Pengguna berhasil dibuat", 
        data: user 
      });
    
  } catch (error) {
    next(error);
  }
};

// Get all users
export const getAllUsers = async (req, res, next) => 
{
  try {
    const users = await User.find();
    res
      .status(200)
      .json({ 
        code: 200,
        message: "Daftar pengguna berhasil diambil", 
        count: users.length,
        data: users 
      });

  } catch (error) {
    next(error);
  }
};

// Update user by ID
export const updateUser = async (req, res, next) => 
{
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) 
    {
      return res
        .status(404)
        .json({ 
          code: 404,
          message: "Pengguna tidak ditemukan" 
        });
    }

    res
      .status(200)
      .json({ 
        code: 200,
        message: "Pengguna berhasil diperbarui", 
        data: user 
      });

  } catch (error) {
    if (error.code === 11000) 
    {
      return res
        .status(409)
        .json({ 
          code: 409,
          message: "Email sudah digunakan oleh pengguna lain." 
        });
    }
    next(error);
  }
};

// Delete user by ID
export const deleteUser = async (req, res, next) => 
{
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) 
    {
      return res
        .status(404)
        .json({ 
          code: 404,
          message: "Pengguna tidak ditemukan" 
        });
    }

    res
      .status(200)
      .json({ 
        code: 200,
        message: "Pengguna berhasil dihapus" 
      });

  } catch (error) {
    next(error);
  }
};
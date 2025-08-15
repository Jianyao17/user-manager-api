import express from 'express';
import { createUser, getAllUsers, updateUser, deleteUser } from '../controllers/user.controller.js';
import { userValidationRules, validate } from '../middlewares/validator.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Manajemen User
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Mengambil semua data user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Daftar user berhasil diambil
 */
router.get('/', getAllUsers);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Membuat user baru
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama: { type: 'string' }
 *               email: { type: 'string' }
 *               nomorTelepon: { type: 'string' }
 *               departemen: { type: 'string' }
 *               statusAktif: { type: 'boolean' }
 *     responses:
 *       201:
 *         description: user berhasil dibuat
 *       422:
 *         description: Validasi gagal
 */
router.post('/', userValidationRules(), validate, createUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Memperbarui data user berdasarkan ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID user dari MongoDB
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama: { type: 'string' }
 *               email: { type: 'string' }
 *               nomorTelepon: { type: 'string' }
 *               departemen: { type: 'string' }
 *               statusAktif: { type: 'boolean' }
 *     responses:
 *       200:
 *         description: user berhasil diperbarui
 *       404:
 *         description: user tidak ditemukan
 */
// Pastikan baris ini benar: '/:id'
router.put('/:id', userValidationRules(), validate, updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Menghapus user berdasarkan ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID user dari MongoDB
 *     responses:
 *       200:
 *         description: user berhasil dihapus
 *       404:
 *         description: user tidak ditemukan
 */
// Pastikan baris ini juga benar: '/:id'
router.delete('/:id', deleteUser);

export default router;
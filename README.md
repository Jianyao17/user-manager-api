# User Manager API

Backend RESTful API sederhana untuk mengelola data user. Memiliki fitur CRUD, Validasi dan Integrasi dengan database MongoDB.

Tampilan Website
![Screenshot Tampilan Web](public\img\website.png)

---

## Tech Stack
- **Node.js**: Runtime JavaScript untuk server-side.
- **Express.js**: Framework web untuk Node.js.
- **MongoDB**: Database NoSQL untuk menyimpan data pengguna.
- **Docker**: Untuk containerisasi aplikasi.

### Struktur Folder
```
user-manager-api/
├── docker-compose.yml
├── Dockerfile
├── package.json
├── public/
│   └── index.html
├── src/
│   ├── server.js
│   ├── controllers/
│   │   └── user.controller.js
│   ├── database/
│   │   └── mongodb.js
│   ├── docs/
│   │   └── swagger.js
│   ├── middlewares/
│   │   ├── checkDBConection.js
│   │   ├── errorHandler.js
│   │   └── validator.js
│   ├── models/
│   │   └── user.model.js
│   └── routes/
│       └── user.routes.js
```

---

## Cara Menjalankan Aplikasi

### Secara Umum
1. Pastikan Node.js dan MongoDB sudah terinstal di sistem Anda.
2. Clone repository ini:
   ```bash
   git clone https://github.com/Jianyao17/user-manager-api.git
   ```
3. Masuk ke direktori proyek:
   ```bash
   cd user-manager-api
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Jalankan server:
   ```bash
   npm start
   ```
6. Akses aplikasi di `http://localhost:3000`.

### Menggunakan Docker
1. Pastikan Docker sudah terinstal di sistem Anda.
2. Jalankan perintah berikut untuk membangun dan menjalankan container:
   ```bash
   docker-compose up --build
   ```
3. Akses aplikasi di `http://localhost:3000`.

---

## Dokumentasi API
API yang disediakan oleh aplikasi ini meliputi:

### Endpoint Utama
1. **GET /users**: Mendapatkan daftar semua pengguna yang tersimpan di database.

2. **POST /users**: Menambahkan pengguna baru ke database.
   - **Request Body**:
     ```json
     {
       "nama": "John Doe",
       "email": "johndoe@example.com",
       "nomorTelepon": "08123456789",
       "statusAktif": true,
       "departemen": "IT"
     }
     ```

3. **PUT /users/:id**: Memperbarui data pengguna berdasarkan ID.
   - **Request Body**:
     ```json
     {
       "nama": "Jane Doe",
       "email": "janedoe@example.com",
       "nomorTelepon": "08198765432",
       "statusAktif": false,
       "departemen": "HR"
     }
     ```

4. **DELETE /users/:id**: Menghapus pengguna berdasarkan ID.

### Dokumentasi Lengkap
Dokumentasi lengkap API tersedia di url `/api-docs`. Anda dapat mengaksesnya untuk melihat detail lebih lanjut tentang setiap endpoint.


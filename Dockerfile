# Menggunakan base image Node.js versi 18 yang ringan (Alpine)
FROM node:18-alpine

# Menetapkan direktori kerja di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json dahulu
COPY package*.json ./

# Install dependencies aplikasi
RUN npm install

# Salin sisa file aplikasi ke dalam direktori kerja
COPY . .

# Buka port 3000 di container untuk aplikasi
EXPOSE ${PORT}

# Perintah default untuk menjalankan aplikasi saat container dimulai
CMD ["npm", "start"]
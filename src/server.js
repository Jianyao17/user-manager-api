import dotenv from 'dotenv';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { fileURLToPath } from 'url';
import path from 'path';
import cors from 'cors';

// Import local modules
import connectDB from '../src/database/mongodb.js';
import userRoutes from './routes/user.routes.js';
import errorHandler from '../src/middlewares/errorHandler.js';
import checkDbConnection from './middlewares/checkDBConection.js';
import swaggerSpec from '../src/docs/swagger.js';

dotenv.config();

// Helper untuk __dirname 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// 1. Core Middleware
app.use(cors());
app.use(express.json());

// 2. API Routes
app.use('/api/v1/users', checkDbConnection, userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Swagger UI untuk dokumentasi API

// 3. Serve Static Files
app.use(express.static(path.join(__dirname, '../public')));

// 4. Error Handler 
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => 
{ 
  await connectDB(); // Koneksi ke MongoDB
  console.log(`Server running on http://localhost:${PORT}`) 
});

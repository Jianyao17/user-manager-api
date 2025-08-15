import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User Management API",
      version: "1.0.0",
      description: "API sederhana untuk manajemen user",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
        description: "Development server",
      },
    ],
  },
  apis: ["./src/routes/*.js", "./src/models/*.js"], // Path ke file routes dan models
};

const swaggerSpec = swaggerJsdoc(options);

// Tambahkan skema untuk User
swaggerSpec.components = 
{
  schemas: {
    User: {
      type: "object",
      properties: 
      {
        _id: { type: "string", example: "60d0fe4f5311236168a109ca" },
        nama: { type: "string", example: "John Doe" },
        email: { type: "string", example: "john.doe@example.com" },
        nomorTelepon: { type: "string", example: "081234567890" },
        statusAktif: { type: "boolean", example: true },
        departemen: { type: "string", example: "Teknologi" },
        createdAt: { type: "string", format: "date-time" },
        updatedAt: { type: "string", format: "date-time" },
      },
    },

    UserInput: 
    {
      type: "object",
      required: ["nama", "email", "nomorTelepon", "departemen"],
      properties: 
      {
        nama: { type: "string", example: "Jane Doe" },
        email: { type: "string", example: "jane.doe@example.com" },
        nomorTelepon: { type: "string", example: "089876543210" },
        statusAktif: { type: "boolean", example: false },
        departemen: { type: "string", example: "Marketing" },
      },
    },
  },
};

export default swaggerSpec;

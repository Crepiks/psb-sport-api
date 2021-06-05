import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  client: process.env.DB_CONNECTION,
  connection: {
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USERNAME || 'root',
    port: parseInt(process.env.DB_PORT) || 3306,
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'root',
  },
};

import dotenv from 'dotenv';
dotenv.config();

const config = {
  environment: process.env.APP_ENV || 'production',
  appUrl: process.env.APP_URL,
  appPort: process.env.APP_PORT || 3000,
  db: {
    connection: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
};

export default config;
module.exports = config;

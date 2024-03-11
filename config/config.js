require('dotenv').config(); // Load environment variables from .env file

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        dialect: 'mysql'
    },
    // Add other environments if needed (e.g., production, testing)
};

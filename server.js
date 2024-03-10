const sequelize = require('./config/connection');
const { User, Post, Comment } = require('./models');

// Synchronize models with the database
sequelize.sync({ force: false }).then(() => {
    console.log('Database synced');
    // Your server start logic here
});

const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const config = require('./config/config.js');
const sequelize = require('./config/connection');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Handlebars setup
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.engine('handlebars', exphbs.create({ defaultLayout: 'main' }).engine);
app.set('view engine', 'handlebars');

// Session middleware
app.use(
    session({
        secret: 'your-secret-key',
        resave: true,
        saveUninitialized: true,
    })
);

// Routes
app.use(routes);

// Sequelize sync and start server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});

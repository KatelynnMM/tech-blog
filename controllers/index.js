// controllers/index.js
const router = require('express').Router();

// Import route controllers
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api-routes');
const dashboardRoutes = require('./dashboard-routes');

// Use route controllers
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;

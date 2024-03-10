// controllers/homeController.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Tech Blog Home' });
});

module.exports = router;

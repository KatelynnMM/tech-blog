// controllers/api-routes.js
const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// Get all posts API route
router.get('/api/posts', async (req, res) => {
    try {
        // Fetch all posts
        const posts = await Post.findAll();

        // Send JSON response with posts data
        res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Additional API route handlers...
module.exports = router;

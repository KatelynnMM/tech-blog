// controllers/dashboard-routes.js
const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// Dashboard route
router.get('/dashboard', async (req, res) => {
    try {
        const userId = req.session.userId; // Assume you're using session-based authentication

        // Fetch all posts created by the logged-in user
        const userPosts = await Post.findAll({
            where: { userId },
            include: [
                {
                    model: Comment,
                    attributes: ['content', 'createdAt'],
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
            ],
        });

        // Render dashboard with the user's posts and comments data
        res.render('dashboard', { userPosts });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Additional dashboard route handlers...
module.exports = router;

// controllers/home-routes.js
const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// Homepage route
router.get('/', async (req, res) => {
    try {
        // Fetch all posts with associated user and comment data
        const posts = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
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

        // Render homepage with posts data
        res.render('homepage', { posts });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// View single post route
router.get('/post/:id', async (req, res) => {
    try {
        // Fetch a single post with associated user and comment data
        const post = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
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

        // Render post details page
        res.render('post-details', { post });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Additional route handlers...
module.exports = router;

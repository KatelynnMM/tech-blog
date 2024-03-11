// models/index.js
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Associations
User.hasMany(Post, {
    foreignKey: 'userId', // foreign key in the Post model referencing User
});

Post.belongsTo(User, {
    foreignKey: 'userId', // foreign key in the Post model referencing User
});

User.hasMany(Comment, {
    foreignKey: 'userId', // foreign key in the Comment model referencing User
});

Comment.belongsTo(User, {
    foreignKey: 'userId', // foreign key in the Comment model referencing User
});

Post.hasMany(Comment, {
    foreignKey: 'postId', // foreign key in the Comment model referencing Post
});

Comment.belongsTo(Post, {
    foreignKey: 'postId', // foreign key in the Comment model referencing Post
});

module.exports = { User, Post, Comment };

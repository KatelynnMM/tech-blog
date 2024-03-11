-- Insert users
INSERT INTO User (username, password)
VALUES
  ('user1', 'hashed_password_1'),
  ('user2', 'hashed_password_2');
  -- Add more users as needed;

-- Insert posts
INSERT INTO Post (title, content, userId, createdAt)
VALUES
  ('First Post', 'This is the content of the first post.', 1, '2022-01-01 12:00:00'),
  ('Second Post', 'This is the content of the second post.', 2, '2022-01-02 14:30:00');
  -- Add more posts as needed;

-- Insert comments
INSERT INTO Comment (content, userId, postId, createdAt)
VALUES
  ('Great post!', 1, 1, '2022-01-01 12:30:00'),
  ('Nice thoughts!', 2, 1, '2022-01-01 13:00:00'),
  ('Interesting!', 1, 2, '2022-01-02 15:00:00');
  -- Add more comments as needed;


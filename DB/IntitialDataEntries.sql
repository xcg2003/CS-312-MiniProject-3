INSERT INTO users (password, name) VALUES
('password123', 'John Doe'),
('password456', 'Jane Smith'),
('password789', 'Alice Johnson');

INSERT INTO blogs (creator_user_id, creator_name, title, body, date_created) VALUES
(1, 'John Doe', 'The Journey to Coding', 'Learning coding is a challenging but rewarding journey...', NOW()),
(2, 'Jane Smith', 'Why I Love Web Development', 'Web development allows you to create things that people use...', NOW()),
(1, 'John Doe', 'Cybersecurity Tips', 'Keeping your system secure is crucial...', NOW()),
(3, 'Alice Johnson', 'My Favorite Tech Gadgets', 'Tech gadgets are evolving every day and here are my top picks...', NOW()),
(2, 'Jane Smith', 'The Power of JavaScript', 'JavaScript is one of the most versatile languages...', NOW());
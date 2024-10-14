CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    password VARCHAR(255),
    name VARCHAR(255)
);

CREATE TABLE blogs (
    blog_id SERIAL PRIMARY KEY,
    creator_user_id INTEGER,  
    creator_name VARCHAR(45),
    title VARCHAR(255),
    body TEXT,
    date_created TIMESTAMP,
    FOREIGN KEY (creator_user_id) REFERENCES users(user_id)
);
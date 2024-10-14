import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
    user: 'postgres',
    host: 'localhost', 
    database: 'BlogDB',
    password: 'B3stP@ssw0rd!2024',
    port: 5432, 
});

// Test the connection
pool.connect()
    .then(() => {
        console.log('Database connection successful!');
    })
    .catch((err) => {
        console.error('Database connection error:', err.stack);
    })
    .finally(() => {
        pool.end(); // Close the connection
    });
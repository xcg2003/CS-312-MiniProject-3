import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import pool from './DB/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use body-parser middleware to parse form data
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).render('signUp');
    console.log('GET request for /');
});

app.post('/', async (req, res) => {
    const { username, password, name } = req.body;
    try{
        const newUser = await pool.query('SELET FROM user WHERE username = $1', [username]);
        if(newUser.rows.length > 0){
            return res.status(401).send('That username is taken');
        }

        await pool.query('INSERT INTO user (username, password, name) VALUES ($1, $2, $3)', [username, password, name]);
        res.redirect('/login');

    }
    catch(err){
        console.error(err);
    }
});

app.get('/login', (req, res) =>{
    res.status(200).render('login');
});

app.get('/blogs', (req, res) =>{
    res.send('Blogs page');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

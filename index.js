import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.status(200).render('signUp');
    console.log('GET request for /');
});

app.get('/login', (req, res) =>{
    res.status(200).render('login');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

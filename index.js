import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middle ware to parse the json data
app.use(express.json());``

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Set the view engine to ejs
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    res.status(200);
});

app.post('/', (req, res) => {

});

app.get("/blogpost", (req, res) => {
    
});

// Delete post path
app.delete('/post/:id', (req, res) => {

});

// Edit post path
app.put('/post/:id', (req, res) => {
  
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
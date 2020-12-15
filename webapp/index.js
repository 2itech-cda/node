const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({ extended: false }));

// name=toto&email=toto@gmail.com&password=0000
// req.body.name, req.body.email, req.body.password

app.get('/', (_req, res) => {
    res.send('<h1>Express Application</h1>');
});

// http://localhost:3000/users/chucknorris?age=100
app.get('/users/:name', (req, res) => {
    console.log('req.query.age:', req.query.age);
    console.log('req.params.name:', req.params.name);

    res.send('<h1>Simple Response</h1>');
});

app.post('/users', (req, res) => {
    console.log(req.body.name, req.body.email);
    res.json(req.body);
});

app.get('/about', (_req, res) => {
    res.json({"title": "about"});
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.listen(3000, () => console.log('Server is running...'));

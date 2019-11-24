const express = require('express');
const signup = require('./signup');
const login = require('./login');
const search = require('./search')

const app = express();

app.use('/signup', signup);
app.use('/login', login);
app.use('/search', search)


app.get('/', (req, res) => {
    res.json();
});

app.listen(5000);
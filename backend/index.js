const express = require('express');
const signup = require('./signup');
const login = require('./login');
const twilio = require('./twilio');
const postcodes = require('./postcodes');

const app = express();

app.use('/signup', signup);
app.use('/login', login);
app.use('/message', twilio);
app.use('/distance', postcodes);


app.get('/', (req, res) => {
    res.json();
});

app.listen(5000);
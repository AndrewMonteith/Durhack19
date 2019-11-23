const express = require('express');
const login = require('./login');
const twilio = require('./twilio');

const app = express();

app.use('/message', twilio);
app.use('/login', login);


app.get('/', (req, res) => {
    console.log('test');
});
app.listen(5000);
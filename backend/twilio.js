const express = require('express');
const router = express.Router();

const sid = 'ACf48e91c1e36facb8b16fd7d81f9fc64e';
const token = 'e4a28dec1ccd7e2137ed4828b171cbd8';
const client = require('twilio')(sid, token);


router.post('/', (req, res) => {
    data = req.body;
    client.messages.create({
         body: data.message,
         from: '+441133207932',
         to: data.recipient
    })
    .then(message => console.log(message.sid));
});


module.exports = router;

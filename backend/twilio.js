const sid = 'ACf48e91c1e36facb8b16fd7d81f9fc64e';
const token = 'e4a28dec1ccd7e2137ed4828b171cbd8';
const client = require('twilio')(sid, token);

const sendMessage = (from, to, body) => {
    // from & to are phone numbers such as +441133207932 or +447399309325
    // body can just be some ASCII string

    client.messages.create({ from, to, body})
        .then(message => console.log(`sent ${message.sid}`))
        .catch(err => console.log(`error message ${err}`))

}

module.exports.sendMessage = sendMessage;
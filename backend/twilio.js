const sid = 'AC44718136ca540d984a7877c87d052018';
const token = '18f3dda5ae8c389ed982bdd57c741373';
const client = require('twilio')(sid, token);

const sendMessage = (from, to, body) => {
    // from & to are phone numbers such as +441133207932 or +447399309325
    // body can just be some ASCII string

    client.messages.create({ from, to, body})
        .then(message => console.log(`sent ${message.sid}`))
        .catch(err => console.log(`error message ${err}`))

}

module.exports.sendMessage = sendMessage;
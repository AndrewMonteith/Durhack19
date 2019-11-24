const express = require('express')
const cors = require("cors")

const signup = require('./signup')
const login = require('./login')
const search = require('./search')
const users = require('./users')
const twilio = require('./twilio')

const app = express()

app.use(cors())
app.use('/signup', signup)
app.use('/login', login)
app.use('/search', async (request, response) => {
    request.header("Access-Control-Allow-Origin")

    const query = { 
        postcode: request.query.postcode,
        query: request.query.query,
        search: request.query.search
    }

    

    const result = await search(query)
   
    console.log("Returning result to client", result, " based on ", query)

    response.status(200)
    response.json(JSON.stringify(result))
})

app.use('/message', (request, response) => {
    request.header("Access-Control-Allow-Origin")

    const requestBlob = request.query.blob
    const numberFrom = request.query.fromNumber;
    const requestMessage = request.query.message

    let numberTo
    if (typeof(requestBlob.isCharity) === 'boolean') {
        numberTo = requestBlob.phoneNumber
    } else {
        // Look in users for who is running the meetup
        for (const user of users) {
            if (user.user === requestBlob.who) {
                numberTo = requestBlob.who
                break 
            }
        }
    }

    twilio.sendMessage(numberFrom, numberTo, requestMessage)

})


app.get('/', (req, res) => {
    res.json()
})

app.listen(5000)

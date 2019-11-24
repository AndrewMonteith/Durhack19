const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors")

const signup = require('./signup')
const login = require('./login')
const search = require('./search')
const users = require('./users')
const twilio = require('./twilio')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(express.urlencoded())

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

    console.log(request.body)

    const requestBlob = request.body.post
    const numberFrom = request.body.numberFrom;
    const requestMessage = request.body.msg

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

    // hardcode since we need to twilio only lets you send messages to approved numbers
    numberTo = '+447956265784'

    console.log(`Going to ${numberTo}`)

    twilio.sendMessage(numberFrom, numberTo, requestMessage)

    response.status(200)

})

    // const requestBlob = users[0] // JSON.parse(request.query.blob)
    // const numberFrom = '44113320793' // request.query.fromNumber;
                        
    // const requestMessage = 'suck my dick' // request.query.message

    // let numberTo
    // if (typeof(requestBlob.isCharity) === 'boolean') {
    //     numberTo = requestBlob.phoneNumber
    // } else {
    //     // Look in users for who is running the meetup
    //     for (const user of users) {
    //         if (user.user === requestBlob.who) {
    //             numberTo = requestBlob.who
    //             break 
    //         }
    //     }
    // }

    // console.log(`Going to ${numberTo}`)

    // twilio.sendMessage(numberFrom, numberTo, requestMessage)


app.get('/', (req, res) => {
    res.json()
})

app.listen(5000)
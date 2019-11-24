const express = require('express');
const cors = require("cors")

const signup = require('./signup');
const login = require('./login');
const search = require('./search')

const app = express();

app.use(cors())
app.use('/signup', signup);
app.use('/login', login);
app.use('/search', async (request, response) => {
    request.header("Access-Control-Allow-Origin")

    const query = { 
        postcode: request.query.postcode,
        query: request.query.query,
        search: request.query.search
    }

    const result = await search(query)
   
    response.status(200)
    console.log("giving back", result)
    response.json(result)
})


app.get('/', (req, res) => {
    res.json();
});

app.listen(5000);
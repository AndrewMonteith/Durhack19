const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('signup.html', {root: '../frontend/public/'});
});

router.post('/', (req, res) => {
    console.log('got post req to sign up');
    //process the json here
});

module.exports = router;
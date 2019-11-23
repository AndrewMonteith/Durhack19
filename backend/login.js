const express = require('express');
const router = express.Router();
const schemas = require('./utils/schemas.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(cookieParser('secret'));


router.post('/', (req, res) => {
    let data = req.body;
	let errors = schemas.login.validate(data);
	if (errors.length == 0) {
		if (validateLogin(data.username, data.password)) {
			console.log("login success");
			res.cookie('username', data.username, {maxAge: 900000, signed: true, httpOnly: true});
			res.json({type: 'success', message: 'Logged in successfully'});
			return;
		}
		errors.push({message: "invalid login credentials"});
	}
	res.status(400).json({type: 'error', message: errors[0].message});
});


module.exports = router;
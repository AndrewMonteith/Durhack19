const Schema = require('validate');

const login = new Schema({
	username: {
		type: String,
		required: true,
		length: {min: 3, max: 20}
	},
	password: {
		type: String,
		required: true,
		length: {min: 5, max: 20}
	}
});

module.exports = {
    login
}
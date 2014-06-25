module.exports = {
	verbose: true, // Use console logs

	basic_auth: {
		user:     '',
		password: ''
	},

	twitter: {
		consumer_key:         '',
		consumer_secret:      '',
		access_token:         '',
		access_token_secret:  ''
	},

	gnip: {
		user: '',
		pass: '',
		account: '',
		service_username: ''
	},

	// Managed with SQLite once the app is created
	defaults: {
		search:         '',
		tweet_template: ''
	}

};
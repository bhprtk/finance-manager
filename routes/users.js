const express = require('express');
const router = express.Router();
const request = require('request');

router.post('/', (req, res) => {
	console.log('here');
	console.log('req.body', req.body);
  // request.post('https://tartan.plaid.com/connect/', req.body, (error, response, body) => {
	// 	if(error) console.log('error', error);
	// 	console.log('body', body);
	// 	console.log('body', body);
	// })
	request.post({
	  headers: {'content-type' : 'application/x-www-form-urlencoded'},
	  url:     'https://tartan.plaid.com/connect/',
	  form:    req.body
	}, function(error, response, body){
	  console.log(body);
	});

});

module.exports = router;

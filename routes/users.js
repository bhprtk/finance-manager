const express = require('express');
const router = express.Router();
const request = require('request');

router.post('/', (req, res) => {

	request.post({
	  headers: {'content-type' : 'application/x-www-form-urlencoded'},
	  url: 'https://tartan.plaid.com/connect/',
  	form: req.body
	}, function(error, response, body){
	  if(error) throw error;
		res.send(body);
	});

});

module.exports = router;

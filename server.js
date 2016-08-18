'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const request = require('request');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/users', require('./routes/users'));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, './public/index.html'));
});


app.listen(PORT, err => {
	console.log(err || `Server listening on port ${PORT}`);
});

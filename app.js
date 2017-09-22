	var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	mongoose = require('mongoose');
    
app.use(bodyParser.json()); 
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('X-HTTP-Method')); 
app.use(methodOverride('_method'));
app.use(methodOverride('Access-Control-Allow-Origin'));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('views'));

app.use('/', require('./routes'));

module.exports = app;


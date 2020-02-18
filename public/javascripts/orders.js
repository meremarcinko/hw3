//Meredith Marcinko

var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var modFunction = require('./function');

//hard-coded data, for use before we have linked the database
var dummyData = {0: {topping: "cherry", quantity: 2}, 1: {topping: "plain", quantity: 6}, 2: {topping: "chocolate", quantity: 3}};


 
 //response to reques for the orders available in the dataset
 router.get('/orderNumbers', function(req, res, next) 
 {
	 res.json(['0','1', '2']);
 });
 
 //response to request for data for specific categories, as specified by URL encoding
 router.get('/orderData', function(req, res, next)
 {
	 console.log("Request: " + req + "Resource: " + res);
	 var jsonContents = req.query.cat;
	 
	 if(jsonContents === undefined) 
	 {
		 next(createError(400));
		 return;
	 }
	 
	 //make every single item an array to be handled with easily
	 modFunction.testFunction(jsonContents);	
	 
	 let contents = {};
	 
	 for(category of jsonContents)
	 {
		if(dummyData[category] === undefined)
		{
			next(createError(404));
			return;
		}
		contents[category] = dummyData[category];		
	 }
	 //return contents, a object(the dictionary) containing the key and value
	 //pairs of requested categories
	 res.json(contents);
 });
 
 router.post('/', function(req, res, next){
	 res.send(dummyData);
 });
 console.log("went after the post function");
 
 module.exports = router;
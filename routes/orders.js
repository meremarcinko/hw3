//Meredith Marcinko

var express = require('express');
var router = express.Router();

var a = { topping: 'cherry', quantity: 2};
var b = { topping: 'chocolate', quantity: 3};
var c = { topping: 'plain', quantity: 6};
var objectArray = {a, b, c}
var jsonFormat = JSON.stringify(objectArray);
router.get('/', function(req, res, next) 
{
	res.json(jsonFormat);
});
router.post('/', function(req, res, next)
{
	res.json(jsonFormat);
});

module.exports = router;
module.exports.objectArray = jsonFormat;
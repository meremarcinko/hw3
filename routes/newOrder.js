//Meredith Marcinko

var express = require('express');
var router = express.Router();

var db = require('./dbms.js');

router.post('/', function(req, res, next)
{
	var orderId = Math.floor(Math.random() * 9999) + 100;
	db.dbquery("INSERT INTO ORDERS (ORDERID, MONTH, QUANTITY, TOPPING, DAY, NOTES) VALUES (" + orderId + ", 'SEP'," + req.query.quantity +", '" + req.query.topping + "' , 8, '" + req.query.textArea + "')", 
			function(error, result){
				if(error)
				{	
					console.log(error);
					return;
				}
				
			});
});



module.exports = router;

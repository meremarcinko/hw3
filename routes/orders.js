//Meredith Marcinko

var express = require('express');
var router = express.Router();

var db = require('./dbms.js');

router.post('/', function(req, res, next)
{
	db.dbquery("SELECT * FROM ORDERS WHERE MONTH = '" + req.query.month + "'", 
			function(error, result){
				if(error)
				{	
					console.log(error);
					return;
				}
				res.json(result);
			});
});

module.exports = router;

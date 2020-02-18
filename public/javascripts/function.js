//Meredith Marcinko
	 //make every single item an array to be handled with easily
	 function testFunction(jsonContents)
	 {
	 
		if(!Array.isArray(jsonContents))
		{
			jsonContents = [jsonContents];
		}
		return jsonContents;
	 
	 }
 module.exports = {testFunction: testFunction};
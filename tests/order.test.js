//Meredith Marcinko

var testFunction = require('../routes/function.js');

var none = {};
var singleItem = {0: {topping: "cherry", quantity: 2}};
var multiple = {0: {topping: "cherry", quantity: 2}, 1: {topping: "plain", quantity: 6}, 2: {topping: "chocolate", quantity: 3}};


test('should test if the objects were converted to the array', () => {
	expect(testFunction.testFunction(none)).toEqual([{}]);
	expect(testFunction.testFunction(singleItem)).toEqual([{0: {topping: "cherry", quantity: 2}}]);
	expect(testFunction.testFunction(multiple)).toEqual([{0: {topping: "cherry", quantity: 2}, 1: {topping: "plain", quantity: 6}, 2: {topping: "chocolate", quantity: 3}}]);
});
//Meredith Marcinko

const objects = require("../routes/orders.js");

test('order testing', ()=> {
	var objArr = objects.objectArray;
	expect(objArr).toBe("{\"a\":{\"topping\":\"cherry\",\"quantity\":2},\"b\":{\"topping\":\"chocolate\",\"quantity\":3},\"c\":{\"topping\":\"plain\",\"quantity\":6}}");
});
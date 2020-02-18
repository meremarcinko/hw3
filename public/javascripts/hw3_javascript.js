//Meredith Marcinko

function order() 
{
	var textArea = document.getElementById("textarea").value;
	var checker = false;
	
	var quantity = document.getElementById("amount").value;
	var topping = $('input[name=cheesecake]:checked', '#top').val();
	
	
	
	if(textArea.indexOf('vegan') != -1) //vegan exists in the textarea
	{
		if(confirm("Warning! Cheesecake contains dairy!"))
		{
			checker = true;
		}
		else
		{
			checker = false;
		}
		
	}
	else
	{
		document.getElementById("table").innerHTML = "";
		$("p").text("Thank you! Your order has been placed!");
		$("p").append("<li>You ordered: " + quantity + " cheesecake(s) that are " + topping);
		
	}
	
	if(checker)
	{
		document.getElementById("table").innerHTML = "";
		$("p").text("Thank you! Your order has been placed!");
		$("p").append("<li>You ordered: " + quantity + " cheesecake(s) that are " + topping);
	}
}

function updateMonth(month)
{
	document.getElementById("drop").innerHTML = month;
	$.post("http://localhost:3000/orders", function(data, status){
		var json = JSON.parse(data);
		document.getElementById("cher").innerHTML = json.a.quantity + " cherry";
		document.getElementById("choc").innerHTML = json.b.quantity + " chocolate";
		document.getElementById("pla").innerHTML = json.c.quantity + " plain";
	},  'json');
}
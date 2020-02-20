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
		
		$.post("http://localhost:3000/newOrder?quantity=" + quantity + "&topping=" + topping + "&textArea=" + textArea , function(data){
			
		});
	}
	
	if(checker)
	{
		document.getElementById("table").innerHTML = "";
		$("p").text("Thank you! Your order has been placed!");
		$("p").append("<li>You ordered: " + quantity + " cheesecake(s) that are " + topping);
		
		$.post("http://localhost:3000/newOrder?quantity=" + quantity + "&topping=" + topping + "&textArea=" + textArea , function(data){
			
		});
	}
}

function updateMonth(month)
{
	document.getElementById("drop").innerHTML = month;
	$.post("http://localhost:3000/orders?month=" + month.toUpperCase(), function(data){
		var num1 = 0;
		var num2 = 0;
		var num3 = 0;
		
		
		for(var i = 0; i<data.length; i++)
		{
			if(data[i].TOPPING == "plain")
			{
				//num1 = data[i].QUANTITY + num1;
				num1+=data[i].QUANTITY;
			}
			if(data[i].TOPPING == "cherry")
			{
				//num2 = data[i].QUANTITY + num2;
				num2+=data[i].QUANTITY;
			}
			if(data[i].TOPPING == "chocolate")
			{
				num3+=data[i].QUANTITY;
				//num3 = data[i].QUANTITY + num3;
			}			
		}
		
		
		document.getElementById("cher").innerHTML = num2 + " cherry";
		document.getElementById("pla").innerHTML = num1 + " plain";
		document.getElementById("choc").innerHTML = num3 + " chocolate";
	
		
	});
}
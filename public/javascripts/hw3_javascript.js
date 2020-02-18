//Meredith Marcinko

function order() 
{
	var textArea = document.getElementById("textarea").value;
	var checker;
	
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
		document.getElementById("table").innerHTML = "Your order has placed!";
	}
	
	if(checker)
	{
		document.getElementById("table").innerHTML = "Your order has placed!";
	}
}

function updateMonth(month)
{
	document.getElementById("drop").innerHTML = month;
}
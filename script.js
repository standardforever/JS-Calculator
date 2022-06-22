
function _addition(num1, num2)
{   
	alert("Your answer is :" + (num1 + num2));
}

function _subtract(num1, num2)
{
	alert("Your answer is:  " + (num1 - num2));
}

function _divide(num1, num2)
{
	alert("Your answer is:  " + num1 / num2);
}

function _multiply(num1, mum2)
{
	alert("Your answer is:  " + num1 * num2)
}

let num1 = prompt('Enter Your First Number:');
let num2= prompt('Enter Your second Number:');
let _sign = prompt("Enter The Operator '*, +, -, /'");

if (isNaN(num1) || isNaN(num2))
{
	throw new Error("Alphabets Not allowed Numbers only")
}

else
{
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);

	if (_sign === '*')
	{
		_multiply(num1, num2);
	}
	else if(_sign == '/')
	{
		_divide(num1, num2);
	}
	else if(_sign == '+')
	{
		_addition(num1, num2);
	}
	else if (_sign == '-')
	{
		_subtract(num1, num2);
	}

	else{
		alert("Input is Wrong");
	}
}
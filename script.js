let num1 = prompt('Enter Your First Number:');

let num2= prompt('Enter Your second Number:');
let _sign = prompt("Enter The Operator '*, +, -, /'");

function _addition(num1, num2)
{   
	const sum = num1 + num2
	alert("Your anwer is:  " + sum);
}

function _subtract(num1, num2)
{
	alert("Your anwer is:  " + (num1 - num2));
}

function _divide(num1, num2)
{
	alert("Your anwer is:  " + num1 / num2);
}

function _multiply(num1, mum2)
{
	alert("Your anwer is:  " + num1 * num2)
}

if (_sign == '*')
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
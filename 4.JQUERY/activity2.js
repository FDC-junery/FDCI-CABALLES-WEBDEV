function calculate(operator) {
	var firstNum = document.getElementById("firstNumber").value;
	var secondNum = document.getElementById("secondNumber").value;
	var firstNumInt = 0;
	var secondNumInt = 0;
	var result = 0;
	var operatorSign = "";

	if(operator == "") {
		alert("Incorrect Operator");
		return;
	}

	if(firstNum == "") {
		alert("First Number is blank");
		return;
	}

	if(secondNum == "") {
		alert("Second Number is blank");
		return;
	}

	firstNumInt = parseInt(firstNum);
	secondNumInt = parseInt(secondNum);

	switch(operator) {
		case "product":
			result = firstNumInt * secondNumInt;
			operatorSign = "*";
			break;
		case "quotient": 
			result = firstNumInt / secondNumInt;
			operatorSign = "/";
			break;
		case "sum":
			result = firstNumInt + secondNumInt;
			operatorSign = "+";
			break;
		case "difference":
			result = firstNumInt - secondNumInt;
			operatorSign = "-";
			break;
	}

	document.getElementById("result").innerHTML = firstNumInt + " " + operatorSign + " " + secondNumInt + " = " +result

}
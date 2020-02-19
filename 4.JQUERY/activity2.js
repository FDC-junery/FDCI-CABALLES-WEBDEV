//Start of Part Two
var productArr = [];
var totalValuePerProd = [];

document.getElementById("addProduct").onclick = function(event) {
	var prodName = document.getElementById("productName");
	var prodStock = document.getElementById("productStock");
	var prodPrice = document.getElementById("productPrice");

	if(!stringValidation("Name", prodName.value)) {
		return false;
	}
	if(!numberValidation("Stock", prodStock.value)) {
		return false;
	} 
	if(!priceValidation("Price", productPrice.value)) {
		return false;
	}

	if(productArr.length != 0) {
		if(!checkProductOnStock(productArr, prodName.value)) {
			alert( prodName.value + " is already exists in the inventory.");
			return false;
		}
	}

	var product = {
		"name" : prodName.value,
		"stocks" : prodStock.value,
		"price" : prodPrice.value
	};

	productArr.push(product);

	appendProductlist(productArr);
	prodName.value = "";
	prodStock.value = "";
	prodPrice.value = "";

	event.preventDefault();
}

document.getElementById("calculateTotalValue").onclick = function() {
	if(!productArr.length > 0) {
		alert("Please enter product value.");
		return false;
	} 

	totalValuePerProd = calculatePerProduct(productArr);
	appendTotalPerProduct(totalValuePerProd);
	appendTotalPriceValue(getTotalValue(totalValuePerProd));

}

function checkProductOnStock(product, prodName) {
	for(var i in product) {
		if(product[i].name.toUpperCase() == prodName.toUpperCase()) {
			return false;
		}
	}
	return true;
}

function appendTotalPerProduct(productArray) {
	var displayPerProduct = document.getElementById("displayPerProduct");

	displayPerProduct.innerHTML = "";
	displayPerProduct.innerHTML += "<ul>";
	for(var i in productArray) {
		displayPerProduct.innerHTML	+= 	"<li>" + productArray[i].productName + " will have a total value of " + 
		   								productArray[i].totalPrice + "<br>";
	}
	displayPerProduct.innerHTML += "</ul>";

}

function appendTotalPriceValue(totalPrice) {

	var displayTotalValuePrice = document.getElementById("displayTotalValue");
	displayTotalValuePrice.innerHTML = "Total Value: <strong>" + totalPrice + "</strong>";

}

function appendProductlist(productArr) {
	var productList = document.getElementById("displayProdList");

	productList.innerHTML = "";
	for(var index in productArr) {	
		productList.innerHTML+= Object.keys(productArr[index])[0] + " : " + productArr[index].name + ", " +
								Object.keys(productArr[index])[1] + " : " + productArr[index].stocks + ", " +
								Object.keys(productArr[index])[2] + " : " + productArr[index].price + "<br>";
	}
}

function calculatePerProduct(productArr) {
	var totalPerProdArr = [];
	for(var index in productArr) {
		totalPerProdArr.push(getTotalPricePerProd(productArr[index]));
	}
	return totalPerProdArr;
}

function getTotalPricePerProd(product) {
	var productTotalPrice = {
		"productName" : product.name,
		"totalPrice"  : product.stocks * product.price
	}
	return productTotalPrice;
}


function calcSumOfProductPrices(quantity, price) {
	return quantity * price;
}

function getTotalValue(perProdTotalPrices) {
	var totalValue = 0;
	for(var index in perProdTotalPrices) {
		totalValue += perProdTotalPrices[index].totalPrice;
	}
	return totalValue;
}

function displayTotalPricesPerProduct(product) {

}


//Start of Part One
var personArr = [];

document.getElementById("submit").onclick = function(event) {
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;

	if(!stringValidation("Name", name)) {
		return false;
	}	

	if(!numberValidation("Age", age)) {
		return false;
	}		

	var person = {
		"name" : name,
		"age" : age
	};

	personArr.push(person);
	
	displayNameAndAge(personArr);
	event.preventDefault();
}

function displayNameAndAge(person) {
	var displayPerson = document.getElementById("result");
	var displayReadable = document.getElementById("readable");

	displayPerson.innerHTML = JSON.stringify(person);
	displayReadable.innerHTML = "";
	for(var p in person) {
		displayReadable.innerHTML += Object.keys(person[p])[0]+ " : " + person[p].name + ", " 
									+ Object.keys(person[p])[1] + " : " + person[p].age + "<br>";
	}

}

function stringValidation(name, value) {
	if(value == "") {
		alert("Please input a text value on " + name + " field.");
		return false;
	}
	return true;
}

function priceValidation(name, value) {
	var result = true;
	if(value == "") {
		alert("Please input value on " + name + " field");
		result = false;
	} 
	if(value < 0) {
		alert("Please input valid price value on " + name + " field");
		result = false;
	} 
	return result;
}

function numberValidation(name, value) {
	var val = 0;
	var result = true;
	if(value == "") {
		alert("Please input value on " + name + " field.");
		result = false;
	}
	if(value.includes("e")) {
		alert("Number value contains alpha character of e");
		result = false;
	}
	val = parseInt(value);
	if(val < 1) {
		alert("Please enter value 1 and above.");
		result = false;
	}
	if(value.includes(".")) {
		alert("Please input whole number value on " + name + " field.");
		result = false;
	}
	return result;
}
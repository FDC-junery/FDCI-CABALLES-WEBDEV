var addHobbyBtn = document.querySelector("#AddHobby");
addHobbyBtn.addEventListener("click", addHobby);
var parentTr = addHobbyBtn.parentNode.parentNode;

var descTextArea = document.getElementById("selfDesc");
var counter = document.getElementById("counter");
var userProfile = document.getElementById("userProfile");

document.getElementById("name").setAttribute("placeholder", "Enter name here...");

userProfile.style.display = "none";

var warning = document.getElementById("warning");
warning.style.display = "none";

var seldDescTxtArea = document.getElementById("selfDesc");
seldDescTxtArea.addEventListener("input", function(e) {
	var txtTemp = descTextArea.value;
	if(txtTemp.length == 21) {
		descTextArea.value = txtTemp.substring(0, 20);
	}
	txtTemp = descTextArea.value
	var txtCnt = txtTemp;
	var remaining = txtCnt.length;
	var finalDesc = "";

	counter.innerHTML = remaining+"/20";
});

var numOfWords = 0;

if(descTextArea.value == "") {
	counter.innerHTML = numOfWords+"/20";
}

function addHobby(e) {
	var hobbies = document.querySelectorAll("input[class='hobby']");
	var lastHobby = hobbies[hobbies.length-1].parentNode.parentNode;

	var addHobbyTb = document.createElement("INPUT");
	var addBtn = document.createElement("BUTTON");


	addBtn.innerHTML = "Save";
	addBtn.setAttribute("class", "btn btn-info");
	addBtn.setAttribute("id", "saveNewHobby");
	addBtn.setAttribute("style", "margin-top: 5px;");
	addBtn.setAttribute("onclick", "saveNewHobby()");


	addHobbyTb.setAttribute("type", "text");
	addHobbyTb.setAttribute("class", "form-control");
	addHobbyTb.setAttribute("id", "newHobby");

	lastHobby.insertAdjacentElement("afterend", addHobbyTb);
	addHobbyTb.insertAdjacentElement("afterend", addBtn);
	parentTr.style.display = "none";
	addHobbyBtn.style.display = "none";
	e.preventDefault();
}

function saveNewHobby() {
	var hobbies = document.querySelectorAll("input[class='hobby']");
	var lastHobby = hobbies[hobbies.length-1].parentNode.parentNode;
	var newHobbyBtn = document.getElementById("saveNewHobby");
	var newHobbyTb = document.getElementById("newHobby");
	var tempVal = newHobbyTb.value;
	tempVal = tempVal.toLowerCase();
	tempVal = tempVal.charAt(0).toUpperCase() + tempVal.slice(1);
	
	if(tempVal == "") {
		alert("Please enter value on New Hobby field.");
		return false;
	}
	if(!validateNewHobby(hobbies, tempVal)) {
		alert("This hobby -> " + tempVal + " is already existed.");
		return false;
	}

	newHobbyBtn.remove();
	newHobbyTb.remove();
	parentTr.style.display = "";
	addHobbyBtn.style.display = "block";

	var newLastTr = hobbies[hobbies.length-1].parentNode.parentNode;
	console.log(lastHobby);
	appendNewHobby(formatHobbyValue(tempVal));
} 

function formatHobbyValue(value) {
	var temp = value;
	temp = temp.toLowerCase();
	console.log("Temp 1" + temp);
	temp = temp.charAt(0).toUpperCase() + temp.slice(1);
	console.log("Temp 2" + temp);
	value = temp;

	return value;
}

function validateNewHobby(hobbies, text) {
	console.log(hobbies.length);
	var flag = true;
	var temp = "";
	for(var i in hobbies) {
		temp = hobbies[i].value;
		if(text.trim().toUpperCase() == temp.trim().toUpperCase()) {
			flag = false;
		}
		if(i == (hobbies.length-1)) {
			break;
		}
	}

	return flag;
}

function appendNewHobby(value, e) {
	var hobbies = document.querySelectorAll("input[class='hobby']");
	var lastHobby = hobbies[hobbies.length-1].parentNode.parentNode;
	var tr = document.createElement("TR");
	var td = document.createElement("TD");

	lastHobby.insertAdjacentElement("afterend", tr);
	tr.appendChild(td);

	var newHobCb = document.createElement("INPUT");
	newHobCb.setAttribute("type", "checkbox");
	newHobCb.setAttribute("class", "hobby");
	newHobCb.setAttribute("value", value);
	newHobCb.setAttribute("style", "margin-right: 5px;");

	var newHobLabel = document.createElement("LABEL");
	newHobLabel.innerHTML = value;

	td.appendChild(newHobCb);
	newHobCb.insertAdjacentElement("afterend", newHobLabel);
}

document.getElementById("submitProfile").addEventListener("click", submitNewProfile);

function submitNewProfile(e) {
	var name = document.getElementById("name").value;
	var gender = document.getElementById("gender").value;
	var description = document.getElementById("selfDesc").value;
	var message = "";
	var hobbies = "";
	var hobs = "";
	e.preventDefault();


	if(isEmpty(name)) {
		warning.style.display = "block";
		warning.textContent = "Please enter your name";
		return false;
	}

	if(!checkSelectedHobbies()) {
		return false;
	}

	if(isEmpty(description)) {
		warning.style.display = "block";
		warning.textContent = "Please enter self description.";
		return false;
	}

	hobbies = getHobbies();
	for(var i in hobbies) {
		hobs += hobbies[i]
		if(i != hobbies.length-1) {
			hobs += ", ";
		}
		
	}
	console.log(hobs);
	message += "Hi " +name+"<br>";
	message += "Your gender is " +gender+"<br>";
	message += "Your hobbies are " +hobs+"<br>";
	message += "Here's a little about your self:  " +descTextArea.value+"<br>";
	message += "<button id='goOver' onclick='goOver()' class='btn btn-primary'>Go over</button>";

	document.getElementById("inputProfile").style.display = "none";
	userProfile.style.display = "block";
	userProfile.innerHTML = message;	
}

function checkSelectedHobbies() {
	var selectedHobbies = document.querySelectorAll("input[class='hobby']");
	var checkedCount = 0;
	var retVal = true;

	for(var hobbies in selectedHobbies) {
		if(selectedHobbies[hobbies].checked) {
			checkedCount++;
		}
	}

	if(checkedCount < 3) {
		warning.style.display = "block";
		warning.textContent = "Please select at least 3 hobbies";
		retVal = false;
	}
	
	return retVal;
}

function isEmpty(text) {
	var desc = text;
	desc = desc.trim();

	switch(desc) {
		case "":
			return true;
		case 0:
			return true;
		case " ": 
			return true;
		case null:
			return true;
		default:
			return false;
	} 
}

function getHobbies() {
	var selectedHobbies = document.querySelectorAll("input[class='hobby']");
	var catchHobbies = [];
	for(var hobbies in selectedHobbies) {
		if(selectedHobbies[hobbies].checked) {
			console.log(selectedHobbies[hobbies].value);
			catchHobbies[hobbies] = selectedHobbies[hobbies].value;
		}
	}
	return catchHobbies;
}

function goOver() {
	window.location = "activity4.html";
}






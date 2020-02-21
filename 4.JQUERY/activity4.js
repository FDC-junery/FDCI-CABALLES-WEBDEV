var addHobbyBtn = document.querySelector("#AddHobby");
addHobbyBtn.addEventListener("click", addHobby);
var parentTr = addHobbyBtn.parentNode.parentNode;

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
	
	if(tempVal == "") {
		alert("Please enter value on New Hobby field.");
		return false;
	}
	newHobbyBtn.remove();
	newHobbyTb.remove();
	parentTr.style.display = "";
	addHobbyBtn.style.display = "block";

	var newLastTr = hobbies[hobbies.length-1].parentNode.parentNode;
	console.log(newLastTr);

	appendNewHobby(tempVal);
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
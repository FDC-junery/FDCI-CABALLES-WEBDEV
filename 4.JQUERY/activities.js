function getSumOddNumbers() {
	var from = parseInt(document.getElementById('from').value);
	var to = parseInt(document.getElementById('to').value);
	var sum = 0;

 	for(var i=from; i<=to; i++) {
 		if((i%2) == 1) {
 			sum += i;
 		}
    }

   	document.getElementById('displaySumOddNum').innerHTML = "Result: " + sum;
}

function editGrade() {
	document.getElementById('pe_subj').disabled = false;
	document.getElementById('math_subj').disabled = false;
	document.getElementById('science_subj').disabled = false;
	document.getElementById('english_subj').disabled = false;
	document.getElementById('filipino_subj').disabled = false;
	document.getElementById('editgrades').style.display = "none";
	document.getElementById('getaverage').style.display = "none";
	document.getElementById('savegrades').style.display = "block";
}

function savegrades() {
	document.getElementById('pe_subj').disabled = true;
	document.getElementById('math_subj').disabled = true;
	document.getElementById('science_subj').disabled = true;
	document.getElementById('english_subj').disabled = true;
	document.getElementById('filipino_subj').disabled = true;
	document.getElementById('editgrades').style.display = "block";
	document.getElementById('getaverage').style.display = "block";
	document.getElementById('savegrades').style.display = "none";
}

function calcAverage() {
	var pe_subj = parseInt(document.getElementById('pe_subj').value);
	var math_subj = parseInt(document.getElementById('math_subj').value);
	var science_subj = parseInt(document.getElementById('science_subj').value);
	var english_subj = parseInt(document.getElementById('english_subj').value);
	var filipino_subj = parseInt(document.getElementById('filipino_subj').value);

	var average = (pe_subj + math_subj + science_subj + english_subj + filipino_subj) / 5;
	var averageletter = "";

	switch(true) {
    	case average < 60: 
        	averageletter = "F";
            break;
    	case (average > 60 && average < 70): 
    		averageletter = "D";
            break;
    	case (average > 70 && average < 80): 
    		averageletter = "C";
            break;
    	case (average > 80 && average < 90): 
    		averageletter = "B";
            break;
    	case (average > 90 && average < 100): 
    		averageletter = "A";
            break;
    	default :
        	alert("Average is not on range. Bright ka ghorl?");
        	break;
    }

    document.getElementById('displayAverage').style.display = "block";
	document.getElementById('displayAverage').innerHTML = "Average: " + average + "<br> Grade: " + averageletter;
}

function displayBeepBoop() {
	var msg = "";
	if(beepbeepButtonCheck("displaybeepboopbtn", "Display Beep Boop (0 - 100)")) {
		document.getElementById('displaybeepboop').style.display = "block";
		document.getElementById('displaybeepboop').innerHTML = "";
		for(var i = 0; i<=100; i++) {
	    	if((i%3) == 0) {
	        	msg += " beep";
	        }
	        if ((i%5) == 0) {
	        	msg += " boop";
	        }
	        document.getElementById('displaybeepboop').innerHTML += i + msg + "<br>";
	        msg = "";
	    }			
		changeButtonText("displaybeepboopbtn", "Hide");
	} else {
		changeButtonText("displaybeepboopbtn", "Display Beep Boop (0 - 100)");
		document.getElementById('displaybeepboop').style.display = "none";
	}
	
}

function changeButtonText(id, value) {
	console.log(id);
	console.log(value);
	document.getElementById(id).innerHTML = value;
}

function beepbeepButtonCheck(id, value) {
	var text = document.getElementById(id).innerHTML;
	var retBoolean = true;
	console.log("Text: " + text);

	if(text == value) {
		return true;
	} 
	return false;
}

displayTriangle();

function displayTriangle() {
	var displayMessage = "";
	var msg = "";
	for(var i = 1; i <= 5; i++) {
    	for(var j = 1; j <=i; j++) {
        	msg += "* ";
        }
        displayMessage += msg+"<br>";
        msg = "";
    }
    document.getElementById('displayTriangle').innerHTML += displayMessage;
}


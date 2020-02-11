function getSumOddNumbers() {
	var from = parseInt(document.getElementById('from').value);
	var to = parseInt(document.getElementById('to').value);
	var sum = 0;

 	for(var i=from; i<=to; i++) {
 		if((i%2) == 1) {
 			sum += i;
 		}
    }

   	document.getElementById('displaySumOddNum').innerHTML += sum;
}
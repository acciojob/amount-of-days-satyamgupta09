//your JS code here. If required.
function daysOfAYear(val) {
	if((val%4===0 && val%100!==0) || val%400===0) return "366";
	else return "365";
}

let value = prompt("Enter the Year");
alert(daysOfAYear(value));
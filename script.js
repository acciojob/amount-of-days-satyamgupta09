//your JS code here. If required.
// function daysOfAYear(val) {
// 	if((val%4===0 && val%100!==0) || val%400===0) return "366";
// 	else return "365";
// }

// let value = prompt("Enter the Year");
// value = parseInt(value, 10);
function daysOfAYear(year) {
  // Leap year check
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 366; // Leap year
  } else {
    return 365; // Non-leap year
  }
}

// Prompt the user for input
let value = prompt("Enter the Year:");

// Parse and validate the input
value = parseInt(value, 10);
alert(daysOfAYear(value));
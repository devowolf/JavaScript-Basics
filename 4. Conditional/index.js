/*
* Conditional Logic
*/

var userName = prompt("What's your name?");
var civilStatus = prompt("Are you married or single?");

//Let's apply the conditional logic
if(civilStatus === 'married') {
    console.log(userName + " is Married.")
} else if(civilStatus === 'single') {
    console.log(userName + " is Single.")
} else {
    console.log("Error.");
}

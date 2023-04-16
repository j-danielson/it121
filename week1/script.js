const firstName = "Josh";
const lastName = "Danielson";
const yearsOfStudy = 1;
const goal = "Web Dev Certificate";
const message = 'My name is ' + firstName + ' ' +  lastName + '. I have been at SCC for ' + yearsOfStudy + ' and plan to ' + goal + ' after completing my courses.'

document.getElementById("message").innerHTML = message;
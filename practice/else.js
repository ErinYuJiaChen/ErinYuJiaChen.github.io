"use strict";
console.log("it works!");
let yourName = prompt("Whats your name?");
console.log("hi" + yourName);

function addToBody(text){
    document.body.innerHTML += "<p>" + text + "</p>";
}
/*
console.log("it works!");
let yourName = prompt("What's your name?);
addToBody("Hi " + yourName);
*/

let temp = prompt("What temperature is it outside");
temp = Number(temp);

if (temp > 32){
	addToBody("It's freezing! Watch for ice.");
}else if(temp < 80){
	addToBody("take a walk");
}else{
	addToBody("Go to the beach");


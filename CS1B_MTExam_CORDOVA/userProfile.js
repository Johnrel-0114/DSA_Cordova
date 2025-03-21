/*
Johnrel A. Cordova
BSCS-1B
Midterm exam
*/

// This part is the part when it collects user information using prompt()
let fullname  = prompt("enter your full name(first& last):")
let userAge  = Number (prompt("Enter your name"));
let favNo = Number(prompt("Enter your favorite number:"));
let favColor = prompt ("Enter your favorite color:");

// this part is where  log the collected information to the console
console.log("fullname");
console.log("userAge");
console.log("favNo");
console.log("favColor");

//3

// it prompt the user to enter their age
let age = prompt("Enter your age:");

// Convert the input into number
age = Number(age);

/* check the if the input is valid and
categorize the age into different groups*/

if(age < 5 ) {
    console.log("You are a Toddler.");
}else if(age >= 5 && age <=12){
    console.log("Your a Child.");
}else if(age >= 13 && age<= 19){
    console.log("Your a Teenager.");
}else if (age >= 20 && age<= 35){
    console.log ("You are a Young Adult.");
}else if ( age >= 36 && age<= 60){
    console.log ("You are Middle-Aged.");
}else if (age > 60){
    console.log("You are a Senior.");
} else {
    console.log("Invalid age entered.")
}
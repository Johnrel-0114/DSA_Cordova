// Cordova,Johnrel A.
//BSCS1B

let age = prompt("Enter your age:");

if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else if (age >= 20) {
    console.log("You are an adult.");
} else {
    console.log("Invalid age entered.");
}
//if else if activity

let score = prompt("Enter your score:");

if (score >= 90) {
    console.log("Excellent");
} else if (score >= 80 && score < 90) {
    console.log("Good");
} else if (score >= 70 && score < 80) {
    console.log("Fair");
} else if (score < 70) {
    console.log("Needs Improvement");
} else {
    console.log("Invalid score entered.");
}
// Switch Statement

let dayOfWeek = prompt("Enter a day of the week (e.g., Monday, Tuesday):");

switch(dayOfWeek.toLowerCase()) {
    case "monday":
        console.log("Task for Monday: Plan the week ahead.");
        break;
    case "tuesday":
        console.log("Task for Tuesday: Attend team meeting.");
        break;
    case "wednesday":
        console.log("Task for Wednesday: Work on project.");
        break;
    case "thursday":
        console.log("Task for Thursday: Review progress.");
        break;
    case "friday":
        console.log("Task for Friday: Submit reports.");
        break;
    case "saturday":
        console.log("Task for Saturday: Relax and unwind.");
        break;
    case "sunday":
        console.log("Task for Sunday: Prepare for the upcoming week.");
        break;
    default:
        console.log("Invalid input. Please enter a valid day of the week.");
        break;
}
// for loop activity
// evenNumbers.js

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Now, printing only even numbers between 1 and 10:");

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// while loop activity
function startNumberGuessingGame() {
    const correctNumber = Math.floor(Math.random() * 10) + 1; 
    let userGuess;

    console.log("Welcome to the Number Guessing Game!");
    console.log("Try to guess a number between 1 and 10.");

    while (userGuess !== correctNumber) {

        userGuess = parseInt(prompt("Enter your guess:"));

        if (NaN(userGuess) || userGuess < 1 || userGuess > 10) {
            console.log("Invalid input! Please enter a number between 1 and 10.");
        } else if (userGuess < correctNumber) {
            console.log("Your guess is too low. Try again!");
        } else if (userGuess > correctNumber) {
            console.log("Your guess is too high. Try again!");
        } else {
            console.log("Congratulations! You guessed the correct number: " + correctNumber);
        }
    }
}

// while loop do while
const correctPassword = "hahahaha123"; 

let userInput; 

do {
    userInput = prompt("Please enter your password:");

    if (userInput === correctPassword) {
        console.log("Success! You have entered the correct password.");
    } else {
        console.log("Incorrect password. Please try again.");
    }
} while (userInput !== correctPassword);

// REFERENCES
// https://stackoverflow.com/questions/65089644/javascript-program-that-prompts-a-user-to-enter-name-and-age-and-print-out-the-r
// https://www.programiz.com/javascript/if-else
// https://stackoverflow.com/questions/4156434/javascript-get-the-first-day-of-the-week-from-current-date
// https://www.geeksforgeeks.org/python-program-to-print-all-even-numbers-in-a-range/
// https://stackoverflow.com/questions/43826473/inserting-a-loop-into-a-javascript-number-guessing-game
// eamtreehouse.com/community/the-code-in-appjs-just-opens-a-prompt-asks-for-a-password-and-writes-to-the-document-something-is-missing

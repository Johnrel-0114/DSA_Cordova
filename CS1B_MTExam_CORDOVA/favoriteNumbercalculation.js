let favNumb = 17; // this is the user favorite number
let userGuess; 

/*this part when the user type their guess
it never stop until the user enter the correct number*/ 
while (userGuess !== favNumb) {
    userGuess = parseInt(prompt("Guess my Favorite Number:"));

    if (userGuess < favNumb) {
        console.log("Too low!!");
    } else if (userGuess > favNumb) {
        console.log("Too high!!");
    } else {
        console.log("Correct you have guess my favnumber!!!");
    }
}
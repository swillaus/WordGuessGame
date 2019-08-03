/* create an array with all potential guesses */
var possibleGuess = ["Madonna", "Bon Jovi", "Blondie", "Cher"]

/* create a var that randomally picks one of the values in that array */
var randomNumber = Math.floor(Math.random() * possibleGuess.length);
var randomWord = possibleGuess[randomNumber]

/* create variables to hold user inputs */
var wins = 0;
var wordDisplay = "";
var guessesLeft = 10;
var incorrectGuess = [];



function ConvertWordToBlanks(display, word) {
    display = "";
    console.log(word.split(""))
    for (var i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            display += "&nbsp;"
        } else {
            display += "_ "
        }
    }
    // console.log(display)
    document.getElementById("currentWord").innerHTML = display;
}

/* check user inputs and whether that letter is contained in the string */
document.addEventListener("keyup", function (event) {
    // console.log(event.keyCode)
    var keyEntered = event.keyCode;
    for (var i = 0; i < randomWord.length; i++) {

        // console.log(randomWord.charCodeAt(i))
        if (randomWord.charCodeAt(i) === event.keyCode) {
            console.log("You have a match")

            // display letter within random word

            // if the condition is not satisfied
        } else {
            console.log("You wrong")

            // push letter guessed to incorrect guesses
            incorrectGuess.push(String.fromCharCode(event.keyCode))
            document.getElementById("incorrectGuesses").innerHTML = incorrectGuess;

            // reduce the guesses left score
            document.getElementById("guessesRemaining").innerHTML = guessesLeft--;


        }
        { break; }
    }
})



/* Create a variable that logs the users guesses */

/* Create a variable for the number of wins */

ConvertWordToBlanks(wordDisplay, randomWord);

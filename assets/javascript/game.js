/* create an array with all potential guesses */
var possibleGuess = ["MADONNA", "BON JOVI", "BLONDIE", "CHER"]

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
    // display the placeholder to document
    document.getElementById("currentWord").innerHTML = display;

}

/* check user inputs and whether that letter is contained in the string */
document.addEventListener("keyup", function (event) {

    // console.log(event.keyCode)

    for (var i = 0; i < randomWord.length; i++) {
        console.log(randomWord.length)
        // condition to check
    
        if (randomWord.charCodeAt(i) === event.keyCode){
           
            // find the location of the charater in the string  
            letterPosition = randomWord.indexOf(i)+1
            console.log(letterPosition)

            // document.getElementById("currentWord").innerHTML = "B _ _ _ _ _ _";
            console.log("correct: random " + randomWord.charCodeAt(i) + " vs entered " + event.keyCode);
            // console.log("correct");

        // if the condition is not satisfied  
        } else {
            //console.log("You wrong")

            // push letter guessed to incorrect guesses
            incorrectGuess.push(String.fromCharCode(event.keyCode));
            document.getElementById("incorrectGuesses").innerHTML = incorrectGuess;

            // reduce the guesses left score
            document.getElementById("guessesRemaining").innerHTML = guessesLeft--;
            console.log("incorrect: random " + randomWord.charCodeAt(i) + " vs entered " + event.keyCode);
            
        }
        
        console.log("correct: random " + randomWord.charCodeAt(i) + " vs entered " + event.keyCode);
    }
})



/* Create a variable that logs the users guesses */

/* Create a variable for the number of wins */

ConvertWordToBlanks(wordDisplay, randomWord);

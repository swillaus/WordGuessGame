/* create an array with all potential guesses */
var possibleGuess = ["madonna", "bon jovi", "blondie", "cher"]

/* create a var that randomally picks one of the values in that array */
var randomNumber = Math.floor(Math.random() * possibleGuess.length);
var randomWord = possibleGuess[randomNumber];


/* create variables to hold user inputs */
// Variables for scores
var winCounter = 0;
var guessesLeft = 11;
var lossCounter = 0;

// Variable to display random work to webpage
var wordDisplay = "";

// Var to store incorrect letters
var incorrectGuess = [];

// Var to display correct word as guessed
var blanksAndSuccesses = [];

var numBlanks = 0;
var letterGuessed = "";
var wrongGuesses = [];
var lettersInChosenWord = [];

function ConvertWordToBlanks(display, word) {
  display = "";
  // console.log(word.split(""))
  for (var i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      display += "&nbsp;"
    } else {
      display += "_ "
    }
  }
  // display the placeholder to document
  document.getElementById("currentWord").innerHTML = display;
  numBlanks = word.length;
}


// checkLetters() function
// It's where we will do all of the comparisons for matches.
// Again, it's not being called here. It's just being made for future use.
function checkLetters(letter) {

  // This boolean will be toggled based on whether or not
  // a user letter is found anywhere in the word.
  var letterInWord = false;

  // Check if a letter exists inside the array at all.
  for (var i = 0; i < numBlanks; i++) {
    console.log(randomWord[i])
  
    if (randomWord[i] === letter) {

      // If the letter exists then toggle this boolean to true.
      // This will be used in the next step.
      letterInWord = true;
    }
  }

  // If the letter exists somewhere in the word,
  // then figure out exactly where (which indices).
  if (letterInWord) {

    // Loop through the word
    for (var j = 0; j < numBlanks; j++) {

      // Populate the blanksAndSuccesses with every instance of the letter.
      if (randomWord[j] === letter) {

        // Here we set specific blank spaces to equal the correct letter
        // when there is a match.
        blanksAndSuccesses[j] = letter;
      }
    }

    // Log the current blanks and successes for testing.
    console.log(blanksAndSuccesses);
  }

  // If the letter doesn't exist at all...
  else {

    // Then we add the letter to the list of wrong letters.
    wrongGuesses.push(letter);

    // We also subtract one of the guesses.
    guessesLeft--;

  }

}


// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made.
function roundComplete() {

  // First, log an initial status update in the console
  // telling us how many wins, losses, and guesses are left.
  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + guessesLeft);

  // HTML UPDATES
  // ============

  // Update the HTML to reflect the new number of guesses.
  document.getElementById("guessesRemaining").innerHTML = guessesLeft;

  // This will print the array of guesses and blanks onto the page.
  document.getElementById("currentWord").innerHTML = blanksAndSuccesses.join(" ");

  // This will print the wrong guesses onto the page.
  document.getElementById("incorrectGuesses").innerHTML = wrongGuesses.join(" ");

  // If our Word Guess string equals the solution.
  // (meaning that we guessed all the letters to match the solution)...
  // DELETE THIS
  console.log(randomWord.toString())
  console.log(blanksAndSuccesses.join(""))


  if (randomWord.toString() === blanksAndSuccesses.join("")) {

    // Add to the win counter
    winCounter++;

    // Give the user an alert
    alert("You won the game. Try it again!");

    // Update the win counter in the HTML
    document.getElementById("numberWins").innerHTML = winCounter;

    // Restart the game
    ConvertWordToBlanks();
  }

  // If we've run out of guesses
  else if (guessesLeft === 0) {

    // Add to the loss counter
    lossCounter++;

    // Give the user an alert
    alert("You lost the game");

    // Update the loss counter in the HTML
    document.getElementById("numberLosses").innerHTML = lossCounter;

    // Restart the game
    ConvertWordToBlanks();

  }

}

/* Create a variable that logs the users guesses */

/* Create a variable for the number of wins */

ConvertWordToBlanks(possibleGuess, randomWord);


// Then initiates the function for capturing key clicks.
document.onkeyup = function (event) {

  // Converts all key clicks to lowercase letters.
  letterGuessed = String.fromCharCode(event.which).toLowerCase();
  console.log(letterGuessed)

  // Runs the code to check for correct guesses.
  checkLetters(letterGuessed);

  roundComplete();
};























    // // console.log(event.keyCode)

    // var letterInWord = false;

    // for (var i = 0; i < randomWord.length; i++) {
    //     console.log(randomWord.length)

    //     // condition to check

    //     if (randomWord.charCodeAt(i) === event.keyCode) {
    //         letterInWord = true;

    //     }

    //     // If the letter exists somewhere in the word,
    //     // then figure out exactly where (which indices).
    //     if (letterInWord) {

    //         // Loop through the word
    //         for (var j = 0; j < numBlanks; j++) {

    //             // Populate the blanksAndSuccesses with every instance of the letter.
    //             if (chosenWord[j] === letter) {

    //                 // Here we set specific blank spaces to equal the correct letter
    //                 // when there is a match.
    //                 blanksAndSuccesses[j] = letter;
    //             }
    //         }

    //         // Log the current blanks and successes for testing.
    //         console.log(blanksAndSuccesses);
    //     }

    //     if (letterInWord) {
    //         // find the location of the charater in the string  
    //         letterPosition = randomWord.indexOf(i) + i + 1
    //         console.log(letterPosition)


    //         // update the display text         
    //         document.getElementById("currentWord").innerHTML = randomWord[i] + "_ ";

    //         console.log("correct: random " + randomWord.charCodeAt(i) + " vs entered " + event.keyCode);

    //         // if the condition is not satisfied  
    //     } else {

    //         // push letter guessed to incorrect guesses


    //         incorrectGuess.splice(i, 0, String.fromCharCode(event.keyCode));
    //         document.getElementById("incorrectGuesses").innerHTML = incorrectGuess[i];


    //         // reduce the guesses left score
    //         document.getElementById("guessesRemaining").innerHTML = guessesLeft - 1;
    //         console.log("incorrect: random " + randomWord.charCodeAt(i) + " vs entered " + event.keyCode);
    //     }

    // }
// })

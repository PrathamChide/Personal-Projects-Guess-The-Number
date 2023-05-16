/** GUESS THE NUMBER GAME
 * Done:: TODO: Get the user value from the input and save it to variable numberGuess
 * Done:: TODO: Generate a random number 1 to 100 and save it to variable correctNumber
 * Done TODO: Console whether the guess is too high, to low, or is correct
 * Done:: TODO: Create a function called displayResult to move the logic for the guessed number is correct or not
 * Done:: TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
 * Done:: TODO: Use the showYouWon... functions within displayResult function
 * Done:: TODO: Save the guess history in variable called guesses
 * Done:: TODO: Display the guess history using displayHistory() function
 * Done:: TODO: Use the initGame() function to restart the game
 */

//Variable to store the list of guesses
var guesses = [];

//Variable to store the correct random number
let correctNumber = getRandomNumber();

window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
};

/**
 * Functionality for playing the whole game
 */
function playGame() {
  //CODE GOES HERE
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

/**
 * Show the result for if the guess it too high, too low or correct
 * HINT: Use if, else if, else statement
 */
function displayResult(numberGuess) {
  if (numberGuess < correctNumber) {
    console.log("Guess is too low");
    showNumberBelow();
  } else if (numberGuess > correctNumber) {
    console.log("Guess is too high");
    showNumberAbove();
  } else {
    console.log("Your guess is correct");
    showYouWon();
  }
}

/**
 * Initialize a new game by reseting all values and content on the
 * HINT: Reset the correctNumber, guesses, and HTML content
 */
function initGame() {
  //Reset the correctNumber
  //Reset the result Display
  //Reset the guesses history
  //Reset the guess history display
  correctNumber = getRandomNumber();
  document.getElementById("result").innerHTML = "";
  guesses = [];
  displayHistory();
  //   document.getElementById("history").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.Random()
 */
function getRandomNumber() {
  //CODE GOES HERE
  let randomNumber = Math.floor(Math.random() * 100);
  //   console.log(randomNumber);
  return randomNumber;
}

/**
 * Save Guess History
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  guesses.push(guess);
  console.log(guesses);
}

/**
 * Display guess history to user
 * HTML to use
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}></li>
 * </ul>
 * HINT: use while loop and string concatenation to create a list of items
 */
function displayHistory() {
  let index = guesses.length - 1;
  let list = "<ul class='list-group'>";
  while (index >= 0) {
    list +=
      "<li class='list-group-item'>" +
      "You guessed " +
      guesses[index] +
      "</li>";
    index--;
  }
  list += "</ul>";
  console.log(guesses);
  document.getElementById("history").innerHTML = list;
}

/**
 * Retrieve the dialog based on if the guess is wrong or correct
 */
function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "Awesome job, you got it!";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters
   */
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "Your guess is too high!";

  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to a variable called dialog
   * HINT: Use the 'warning' and text parameters
   */
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "Your guess is too low!";

  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to a variable called dialog
   * HINT: Use the 'warning' and text parameters
   */
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

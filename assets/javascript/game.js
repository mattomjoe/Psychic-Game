document.addEventListener('DOMContentLoaded', function() {
   
    // Create an array that lists out all options for computer (full alphabet).
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins, losses, guesses left, and letters guessed.
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessedSofar = []; //Blank array to hold user guesses

    // Create variables that hold references to the places in the HTML where we want to display things.
    var directionsText = document.getElementById("directions-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guesses-left-text");
    var guessSoFarText = document.getElementById("guess-so-far-text");

    function game() {

        // Creating variables to hold the number of wins, losses, guesses left, and letters guessed.
        guessesLeft = 9;
        guessedSofar = []; //Blank array to hold user guesses
    }

    // This function runs whenever the user presses a key.
    document.onkeyup = function(event) {

        // Determines which key the user pressed.
        var userGuess = event.key;

        // Computer randomly chooses a choice from the alphabet array.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number.

        if (userGuess === computerGuess) { //User's entry matches computer's selection
            wins++; //Win total increases by 1
            game();

        } else if (userGuess !== computerGuess && guessesLeft === 1)  {
            losses++;
            game();

        } else if (userGuess !== computerGuess)  {
            guessesLeft--;
        
            //Need to add to create array for letters to be added for guessedSofar
            guessedSofar.push(userGuess);
            document.getElementById("guess-so-far-text").innerHTML = "Your guesses so far: " + guessedSofar;

        }

        // Display the wins, losses, guesses left, and user guesses so far on HTML page.
        winsText.innerHTML = "Wins: " + wins;
        lossesText.innerHTML = "Losses: " + losses;
        guessesLeftText.innerHTML = "Guesses left: " + guessesLeft;
    };

})
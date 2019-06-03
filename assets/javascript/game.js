 // Creates an array that lists out all of the options (a...z).
 var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j','k','l','m','n', 'o', 'p','q','r','s','t','u','v', 'w', 'x','y','z'];

 // Creating variables to hold the number of wins, losses, guessesLeft, totalGuess. 
 var wins = 0;
 var losses = 0;
 var guessesLeft = 9;
 var totalGuess = userChoiceText;
 var pastUserGuesses = "";
 
 // Create variables that hold references to the places in the HTML where we want to display things.
 var winsText = document.getElementById("wins-text");
 var lossesText = document.getElementById("losses-text");
 var guessesLeft = document.getElementById("guessesLeft");
 var userChoiceText = document.getElementById("userchoice-text");
 

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(computerGuess);
  
  for (var i=1; i<10; i++){
    
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      
      
      
      // Determines which key was pressed by USER.
      var userGuess = event.key;
      console.log(userGuess);
      pastUserGuesses = pastUserGuesses + userGuess + ", " 
      
      
      
      // This logic determines the outcome of the game (win/loss), and increments the appropriate number
      if (userGuess === computerGuess) {
        wins++;
        i=10;} 
        else if (i === 9) {
          losses++;}
          
          // Display the user wins/losses, guesses left, and guesses so far.
          winsText.textContent = "wins: " + wins;
          lossesText.textContent = "losses: " + losses;
          guessesLeft.textContent = "Guesses Left: " + guessesLeft - i ;
          userChoiceText.textContent = "Your Guesses so far: " + pastUserGuesses;
          
        }
        
        
      }
      ;
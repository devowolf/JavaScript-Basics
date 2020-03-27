/*
    Pig Game
*/

// Declare the required variables
var score, currentPlayer, roundScore, gamePlaying;

initializeGame();

// Add click eventListener to the "Roll Dice" button
document.querySelector('.btn-roll').addEventListener('click', function() {
    if( gamePlaying ) {
        // Generate a random number and store it in dice
        var dice = Math.floor(Math.random() * 6) + 1;

        // Display the result
        diceObj = document.querySelector('.dice');
        diceObj.style.display = 'block';
        diceObj.src = 'dice-' + dice + '.png';

        // Update the result
        if(dice !== 1) {
            roundScore += dice;
            document.getElementById('current-' + currentPlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if( gamePlaying ) {
        // add currentScore to the globalScore
        score[currentPlayer] += roundScore;

        document.querySelector('#score-' + currentPlayer).textContent = score[currentPlayer];

        // If user won the game
        if( score[currentPlayer] >= 100 ) {
            document.getElementById('name-' + currentPlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');

            // Set gamePlaying state variable to false
            gamePlaying = false;
        } else {
            // Next player's turn
            nextPlayer();
        }
    }  
});


// "New Game" button
document.querySelector('.btn-new').addEventListener('click', initializeGame);

// Function for next player's turn
function nextPlayer() {
    // Next player's turn
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
    roundScore = 0;

    // Set current score for both players to zero
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Toggle active class on players
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

// Game Initialization Function
function initializeGame() {
    // Assign values to the variables
    score = [0, 0];
    currentPlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    // Set all scores to 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // hide the dice image, only display it when the 'Roll Dice' button is clicked
    document.querySelector('.dice').style.display = 'none';

    // Change player text back from winner
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    // Update classes and set player-0 as active
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

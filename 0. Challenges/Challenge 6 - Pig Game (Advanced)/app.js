/*
    ******* Pig Game (Advanced) *********

    * What's Changed?
    * - Player losses his currentScore, if he/she hits two 6's in a row and its next player's turn
    * - Input field in the html where users can set a winning score, so that they can change predefined score of 100
    * - Added two dices, so the player loses all score if one of them rolls 1
*/

// Declare the required variables
var score, currentPlayer, roundScore, gamePlaying;

initializeGame();
var diceOneLast, diceTwoLast;

// Add click eventListener to the "Roll Dice" button
document.querySelector('.btn-roll').addEventListener('click', function() {

    if( gamePlaying ) {
        // Generate a random number and store it in dice
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // Create two dom objects for dice, to make it cleaner
        diceOneObj = document.querySelector('.dice-1');
        diceTwoObj = document.querySelector('.dice-2');

        // Display both dices and set their images according to the result of math.random() above
        diceOneObj.style.display = 'block';
        diceOneObj.src = 'dice-' + dice1 + '.png';
        diceTwoObj.style.display = 'block';
        diceTwoObj.src = 'dice-' + dice2 + '.png';

        // If user hits two 6's in a row
        if( (dice1 === 6 && diceOneLast === 6) || (dice2 === 6 && diceTwoLast === 6) ) {
            score[currentPlayer] = 0;
            nextPlayer();
        } else if(dice1 !== 1 && dice2 !== 1) {
            roundScore += (dice1 + dice2);
            document.getElementById('current-' + currentPlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }

        // Update last rolled dice values at the end, to use it next time user clicks
        diceOneLast = dice1;
        diceTwoLast = dice2;
    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {

    if( gamePlaying ) {
        // add current roundscore to global score user
        score[currentPlayer] += roundScore;

        document.querySelector('#score-' + currentPlayer).textContent = score[currentPlayer];

        // Declare winningScore and check it.
        var winningScore = parseInt(document.querySelector('.winning-score').value);
        // If winning score is NotaNumber (NaN), assign value 100 to it
        if ( isNaN(winningScore) ) {
            winningScore = 100;
        }

        // If user won the game
        if( score[currentPlayer] >= winningScore ) {
            document.getElementById('name-' + currentPlayer).textContent = 'Winner!';
            hideDice();
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

    // hide the dice images
    hideDice();
    
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

// Function to hide dice images
function hideDice() {
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
}
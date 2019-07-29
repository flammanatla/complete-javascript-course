/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;
var goal =520;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gamePlaying) {
		document.querySelector('.notification').style.display = 'none';

		//Random number
		var dice = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];

		//display correct img
		var diceDOM = document.querySelectorAll('.dice');

		diceDOM.forEach(function(die, index) {
			die.style.display = 'block';
			die.src = 'dice-' + dice[index] + '.png'
		});

		//update the round score IF rolled number != 1
		if (dice[0] !== 1 && dice[1] !== 1) {
			roundScore += dice[0] + dice[1];
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
			if (roundScore >= goal) {
				announceTheWinner();
			}
		} else {
			nextPlayer();
		}
	}
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {
		// add current score to global score
		scores[activePlayer] += roundScore;

		//update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		//check if active player won the game
		if (scores[activePlayer] >= goal) {
			announceTheWinner();
		} else {
			nextPlayer();
		}
	}
});

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0; 
	gamePlaying = true;

	// document.querySelector('#current-' +activePlayer).innerHTML = '<em>' + dice + '</em';

	//document.querySelector('.dice').style.display = 'none';
	hideDice();

	document.getElementById('score-0').textContent = 0;
	document.getElementById('score-1').textContent = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;

	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';

	document.querySelector('.notification').style.display = 'none';

	//since we don't know who is the winner, we remove winner and active css styles from both panels 
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');

	//make player 1 active on the beginning of the game
	document.querySelector('.player-0-panel').classList.add('active');
};

function hideDice() {
	var allDice = document.querySelectorAll('.dice');
	
	allDice.forEach(function(die) {
		die.style.display = 'none';
	});
};

function nextPlayer() {
	//add a notification that activeplayer is losing the turn
	document.querySelector('.notification').innerHTML = 'End of turn for player ' + (activePlayer + 1);
	document.querySelector('.notification').style.display = 'block';

	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;

	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	//hideDice();
};

function announceTheWinner() {
	document.querySelector('#name-' + activePlayer).textContent = 'Winner!'

	hideDice();

	document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
	document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

	gamePlaying = false;
}

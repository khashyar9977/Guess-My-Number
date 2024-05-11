'use strict';

// Make a game

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMasseage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when thers is no input

  if (!guess) {
    displayMasseage('⛔ NO NUMBER !');
  }
  //when playears wins
  else if (guess === secretNumber) {
    displayMasseage('Correct Number🦍');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMasseage(guess > secretNumber ? '📈TOO HIGH' : '📉TOO LOW');

      score--;
      displayScore(score);
    } else {
      displayMasseage('You lost the game!');

      displayScore(0);
    }
  }
});

// coding chaleange (game) #1  launch again butten

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  displayScore(20);

  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMasseage('Start guessing...');
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = '';

  document.querySelector('.number').style.width = '15rem';
});

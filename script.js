'use strict';

const checkBtn = document.querySelector('.check');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const again = document.querySelector('.again');
const currentScore = document.querySelector('.score');
const highScoreInput = document.querySelector('.highscore');
let secretNumber = Math.trunc(Math.random() * 10 + 1); //Need to change number to 20 at the end
let score = 20;
let highScore = 0;

// show the secret number
// number.textContent = secretNumber;

function onClickOrEnter() {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = '🚫No number!';
  } else if (guess === secretNumber) {
    message.textContent = '🎉You got it!';
    document.body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;
    if (highScore < score) {
      highScore = score;
      highScoreInput.textContent = highScore;
    }
  } else if (guess > secretNumber && score > 0) {
    message.textContent = '📈Too high!';
    score--;
    if (score === 0) {
      document.querySelector('.message').textContent = 'You lost the game';
    }
    currentScore.textContent = score;
  } else if (guess < secretNumber && score > 0) {
    message.textContent = '📉Too low!';
    score--;
    if (score === 0) {
      message.textContent = '😣You lost the game!';
    }
    currentScore.textContent = score;
  }
}

function random() {
  return Math.trunc(Math.random() * 10 + 1);
}

function reset() {
  document.body.style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  number.style.width = '15rem';
  guess.value = '';
  score = 20;
  currentScore.textContent = score;
  number.textContent = '?';
  secretNumber = random();
  // number.textContent = secretNumber;
}

// check with click
checkBtn.addEventListener('click', onClickOrEnter);
// reset the game
again.addEventListener('click', reset);
// check with Enter button
guess.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    onClickOrEnter();
  }
});

// document.querySelector('.number').textContent = secretNumber;
// checkBtn.addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   if (!guess) {
//     document.querySelector('.message').textContent = '🚫No number!';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '🎉You got it!';
//   } else if (guess > secretNumber && score > 0) {
//     document.querySelector('.message').textContent = '📈Too high!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else if (guess < secretNumber && score > 0) {
//     document.querySelector('.message').textContent = '📉Too low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   }
// });

// document.querySelector('.guess').addEventListener('keypress', function (e) {
//   if (e.key === 'Enter') {
//     console.log('hi');
//   }
// });

document.querySelector('.guess').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    onClickOrEnter();
  }
});

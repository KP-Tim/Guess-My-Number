'use strict';

const checkBtn = document.querySelector('.check');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const messageBox = document.querySelector('.message');
const again = document.querySelector('.again');
const currentScore = document.querySelector('.score');
const highScoreInput = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 10 + 1); //Need to change number to 20 at the end
let score = 20;
let highScore = 0;

function message(m) {
  messageBox.textContent = m;
}

// show the secret number
// number.textContent = secretNumber;

function onClickOrEnter() {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message('🚫No number!');
  } else if (guess === secretNumber) {
    message('🎉You got it!');
    document.body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;
    if (highScore < score) {
      highScore = score;
      highScoreInput.textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    message(guess > secretNumber && score > 0 ? '📈Too high!' : '📉Too low!');
    score--;
  }
  currentScore.textContent = score;
  if (score <= 0) {
    message('You lost the game');
    document.getElementById('title').innerHTML = 'Game Over!';
    document.body.style.backgroundColor = 'red';
    currentScore.textContent = 0;
  }
}

function random() {
  return Math.trunc(Math.random() * 10 + 1);
}

function reset() {
  document.body.style.backgroundColor = '#222';
  message('Start guessing...');
  number.style.width = '15rem';
  guess.value = '';
  score = 20;
  currentScore.textContent = score;
  document.getElementById('title').innerHTML = 'Guess My Number!';
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

document.querySelector('.guess').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    onClickOrEnter();
  }
});

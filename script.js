'use strict';

const checkBtn = document.querySelector('.check');

const secretNumber = Math.trunc(Math.random() * 10 + 1); //Need to change number to 20 at the end
let score = 20;

document.querySelector('.number').textContent = secretNumber;
checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '🚫No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉You got it!';
  } else if (guess > secretNumber && score > 0) {
    document.querySelector('.message').textContent = '📈Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber && score > 0) {
    document.querySelector('.message').textContent = '📉Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

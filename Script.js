'use strict'

/*
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = 'Correct Number !'
console.log(document.querySelector('.message').textContent)

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

console.log(document.querySelector('.guess').value)
document.querySelector('.guess').value = 23
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1)
let score = 20
let highScore = 0

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  // WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage('No Input !')
  }
  // WHEN PLAYER WINS
  else if (guess === secretNumber) {
    displayMessage('Correct Number !')
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('.number').style.width = '30rem'
    if (score > highScore) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }
  }
  // WHEN PLAYER LOOSE
  else if (guess !== secretNumber) {
    if (score > 0) {
      score--
      document.querySelector('.score').textContent = score
      if (score > 1) {
        if (guess < secretNumber) {
          displayMessage('Too Low !')
        } else {
          displayMessage('Too High !')
        }
      } else {
        displayMessage('You Loose !')
      }
    }
  }
})

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1)
  score = 20

  document.querySelector('.message').textContent = 'Start Guessing...'
  document.querySelector('.score').textContent = score
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.guess').value = ''
  document.querySelector('.number').textContent = '?'
})

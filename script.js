let number = parseInt(Math.random() * 100 + 1);
if (number === 100) {
  number = parseInt(Math.random() * 100 + 1);
}
let preguess = [];
let numGuess = 1;
let playGame = true;
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
let p = document.createElement('p');

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Enter a valid Number');
  } else if (guess < 1) {
    alert('Enter number greater than 1');
  } else if (guess > 101) {
    alert('Enter a number lower than 100');
  } else {
    preguess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over. The Number was ${number}`);
      endGame();
    } else {
      displayGuess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === number) {
    displayMessage(`Congrats! it was the correct guess`);
    endGame();
  } else if (guess > number) {
    displayMessage(`The number is low.`);
  } else if (guess < number) {
    displayMessage(`The number is high.`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  loworHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(guess) {
  userInput.value = '';
  userInput.setAttribute('disabled', '')
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame"> START AGAIN </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame(guess) {
  newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    number = parseInt(Math.random() * 100 + 1);
    userInput.value = '';
    preguess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p)
    playGame = true;
  });
}

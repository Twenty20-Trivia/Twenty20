// GLOBAL VARIABLES FOR ACCESSING DOCUMENTS
// defines the Leader Board element
let leaderBoard = document.getElementById('leaderBoard');
// defines the form we will use to render our Question Cards
let gameStartForm = document.querySelector('form');

let userArray = JSON.parse(localStorage.getItem('playerArray')) || [];

//OTHER GLOBAL VARIABLES
// accesses and parses user's name from local storage
let userName = JSON.parse(localStorage.getItem('player'));


// constructor function to create User objects
function Player(userName, score) {
  this.name = userName;
  this.score = score;
  if (!userArray.includes(this)) {
    userArray.push(this);
  }
}

// TODO: Save username to a variable upon click of sumbit button and switch to game page


// this function starts the game after user submits their userName
function gameStart(event) {
  event.preventDefault();
  location.href = 'game.html';
  // Send to local storage:
  let userName = new Player(event.target.userName.value, 0);
  let stringifiedName = JSON.stringify(userName);
  localStorage.setItem('player', stringifiedName);
  localStorage.setItem('playerArray', JSON.stringify(userArray));
}

gameStartForm.addEventListener('submit', gameStart);


// TODO: Pull a random question card from a constructor function



// function renderQuestion(){
//     for(let i = 0; i < questionArray.length; i++)
// }



// Randomly generates a number between /including 1 and the length of the questions array
// function getRandomIndex() {
//     return Math.floor(Math.random() * questionArray.length);
// }

// QuestionCard.prototype.scoreCalc = function () {},


// TODO: handle answer sumbit function


// TODO: append scores to score board


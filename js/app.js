'use strict;';

// Form where user inputs their name and initiates game
let gameStartForm = document.querySelector('form');

// accesses local storage "player array" to review in Player constructor function
let userArray = JSON.parse(localStorage.getItem('playerArray')) || [];

// constructor function to create User objects
// searches for previous user
// creates a new one if it doesn't currently exist
function Player(userName, score) {
  this.name = userName;
  this.score = score;
  if (!userArray.includes(this)) {
    userArray.push(this);
  }
}

// this function starts the game after user submits their name
function gameStart(event) {
  event.preventDefault();
  location.href = 'game.html';
  // Creates a new Player and sends it to localStorage
  // Stringifies the userArray and sends it to localStorage
  let userName = new Player(event.target.userName.value, 0);
  let stringifiedName = JSON.stringify(userName);
  localStorage.setItem('player', stringifiedName);
  localStorage.setItem('playerArray', JSON.stringify(userArray));
}

// event listener that starts the game
gameStartForm.addEventListener('submit', gameStart);

// TODO: Global Variables
let userName = localStorage.getItem('player');
let questionArray = [];
let correctAnswer = 0;

// TODO: Save username to a variable upon click of sumbit button and switch to game page

let gameStartForm = document.querySelector('form');

function gameStart(event) {
    event.preventDefault();
    location.href = 'game.html';
    // Send to local storage:
    let userName = event.target.userName.value;
    let stringifiedName = JSON.stringify(userName);
    localStorage.setItem('player', stringifiedName);
}

gameStartForm.addEventListener('submit', gameStart);


// TODO: Pull a random question card from a constructor function


function QuestionCard(question, choices, answer, name, fileExtension) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
    this.src = `img/${name}.${fileExtension}`;
    questionArray.push(this);
}

// TODO: Figure out correct answer matchup
// QuestionCard.prototype.correctAnswer = function(choice) {
//     return choice === this.answer;
// },

new QuestionCard('What was the most popular show/ movie streamed on Netflix?', ['Tiger King', 'Dear White People', 'Frozen', 'The Simpsons'], 'Tiger King');
new QuestionCard('What was the hottest commodity of 2020?', ['Rhodium', 'Gold', 'Bitcoin', 'Toilet Paper'], 'Toilet Paper');
new QuestionCard('What is the proper way to wear a mask?', ['On your face, covering your nose and mouth holes', 'Over your shoes, instant booties for visits to your no shoes wearing fancy frinds house.', 'Over your mouth, but not your nose', 'Over your nose, but not your mouth'], 'On your face, covering your nose and mouth holes');
new QuestionCard('What animal were we almost taken out by?', ['Snake', 'Mosquito', 'Humans', 'Crocodile'], 'Mosquito');
new QuestionCard('What was the popular DIY coffee that went viral?', ['Fluffy Coffee', 'Dalgona coffee', 'Deltorian coffee', 'Marvalian coffee'], 'Dalgona coffee');
new QuestionCard('What is the propper name of the virus that made an apperaence in 2020?', ['2019-nCoV', 'SARS-CoV-2', 'COVID-19', 'HCoV-19'], 'COVID-19');
new QuestionCard('The Military rolled out a new branch, what was it called', ['Space Defenders', 'Space Jam', 'Space Force', 'Space Explorers'], 'Space Force');
new QuestionCard('Who was elected president?', ['Donald Trump', 'Jay-z', 'Samuel L Jackson', 'Joe Biden'], 'Joe Biden');
new QuestionCard('Not known to the area- Which winged insect caused alarm when spotted in Washington State?', ['Murder Hornet', 'Killer Bee', 'Rabit Hornet', 'Asian Giant Hornet'], 'Asian Giant Hornet');
new QuestionCard('What was the name of the planet identified by a high school intern at NASA?', ['TOI 1338 b', 'TESS', 'TOI 1337', 'Tatooine'], 'TOI 1338 b');


// function renderQuestion(){
//     for(let i = 0; i < questionArray.length; i++)
// }



// Randomly generates a number between /including 1 and the length of the questions array
// function getRandomIndex() {
//     return Math.floor(Math.random() * questionArray.length);
// }

// QuestionCard.prototype.scoreCalc = function () {},

console.log(questionArray);
console.log(userName);
// TODO: handle answer sumbit function


// TODO: append scores to score board
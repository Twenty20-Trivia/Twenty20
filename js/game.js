let gameCard = document.getElementById('gameCard');
let gameForm = document.getElementById('gameForm');

// this array stores our QuestionCard objects
let questionArray = [];
// this is the counter for user's correct answers
let score = 0;
// score to save for leader board
let finalScore = 0;
// this is the array that stores each Player object created
let userArray = JSON.parse(localStorage.getItem('playerArray'));
let index = 0;

let userName = JSON.parse(localStorage.getItem('player'));
console.log(userName);

// TO DO: Render QuestionCards to game.html page

QuestionCard.prototype.renderQuestion = function() {
  let question = document.getElementById('question');
  question.textContent = this.question;
  gameCard.appendChild(question);

  let labels = gameForm.children[0].children;
  let labelOne = document.getElementById('optionOne');
  labelOne.setAttribute('value', this.choices[0]);
  labels[2].textContent=this.choices[0];
  let labelTwo = document.getElementById('optionTwo');
  labelTwo.setAttribute('value', this.choices[1]);
  labels[4].textContent=this.choices[1];
  let labelThree = document.getElementById('optionThree');
  labelThree.setAttribute('value', this.choices[2]);
  labels[6].textContent=this.choices[2];
  let labelFour = document.getElementById('optionFour');
  labelFour.setAttribute('value', this.choices[3]);
  labels[8].textContent=this.choices[3];
};

gameForm.addEventListener('submit', handleAnswer);

function handleAnswer(event) {
  event.preventDefault();
  console.log(event.target.answer.value);
  if (event.target.answer.value === questionArray[index].answer) {
    score++;
  }
  index++;
  if (index <= questionArray.length -1) {
    questionArray[index].renderQuestion();
  } else {
    scoreMessage();
    userName.score = score;
    updatePlayerArray();
    localStorage.setItem('player', JSON.stringify(userName));
  }
}

function updatePlayerArray () {
  for (let i = 0; i < userArray.length; i++) {
    if (userName.name === userArray[i].name) {
      userArray[i] = userName;
      localStorage.setItem('playerArray', JSON.stringify(userArray));
    }
  }
}

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

questionArray[index].renderQuestion();


// this works y'all!!! (gives custom message to user depending on their score)
function scoreMessage() {
  if (score <= 5) {
    alert('yeah, you didnt do so well');
  } else if (score <= 15) {
    alert('You did pretty good!');
  } else if (score < 20) {
    alert('You did great!!!');
  } else {
    alert ('certifiable historian!');
  }
}
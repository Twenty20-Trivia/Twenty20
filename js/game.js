// this array stores our QuestionCard objects
let questionArray = [];
// this is the counter for user's correct answers
let score = 0;

// where question and image are rendered
let gameCard = document.getElementById('gameCard');

// where choices and submit button are rendered
let gameForm = document.getElementById('gameForm');


// retrieves and parses array of Players created on app.js
let userArray = JSON.parse(localStorage.getItem('playerArray'));
let index = 0;

let userName = JSON.parse(localStorage.getItem('player'));
console.log(userName);

// TO DO: Render QuestionCards to game.html page

QuestionCard.prototype.renderQuestion = function() {
  // renders the question
  let question = document.getElementById('question');
  question.textContent = this.question;
  gameCard.appendChild(question);

  // renders the image
  let image = document.getElementById('questionImage');
  image.src = (this.src);
  gameCard.appendChild(image);

  // renders the choices
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

// adding event listener to the game
gameForm.addEventListener('submit', handleAnswer);

// controls how the question cards are rendered
function handleAnswer(event) {
  event.preventDefault();
  // if the radio button clicked is absolutely equal to the QuestionCard's correct answer, add 1 to score
  if (event.target.answer.value === questionArray[index].answer) {
    score++;
  }
  // add 1 to the index that controls the QuestionCards
  index++;
  // if the index is less than the questionArray, render next question
  if (index <= questionArray.length -1) {
    questionArray[index].renderQuestion();
  } else {
    // remove event listener
    gameForm.removeEventListener('submit', handleAnswer);
    // show the total score and customized message
    scoreMessage();
    // reassign user's Player object score
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

// Constructor that creates each question with choices, image & correct answer
// pushes each complete question into an array
function QuestionCard(question, choices, answer, imgName, fileExtension = 'jpg') {
  this.question = question;
  this.choices = choices;
  this.answer = answer;
  this.src = `img/${imgName}.${fileExtension}`;
  questionArray.push(this);
}

// gives custom message to player after game depending on their score
function scoreMessage() {
  let results = document.getElementById('results');
  let message = document.createElement('p');
  if (score <= 5) {
    message.textContent = `Total Score: ${score}/20...Were you even awake in 2020?`;
  } else if (score <= 10) {
    message.textContent = `Total Score: ${score}/20... Hmm, that's pretty okay.`;
  } else if (score <= 15) {
    message.textContent = `Total Score: ${score}/20...You done good!`;
  } else if (score < 20) {
    message.textContent = `Total Score: ${score}/20 Way to go, you did great!`;
  } else {
    message.textContent = `Total Score: ${score}/20...Perfect score, certifiable historian`;
  }
  results.appendChild(message);
  let link = document.createElement('a');
  link.href= 'leaderBoard.html';
  link.textContent = 'Checkout the Leader Board';
  results.appendChild(link);
}

// TODO: Figure out correct answer matchup
// QuestionCard.prototype.correctAnswer = function(choice) {
//     return choice === this.answer;
// },

// question 1
new QuestionCard('What was the most popular show streamed on Netflix?', ['The Crown', 'Tiger King', 'Lucifer', 'Ozark'], 'Ozark', 'q01');

// question 2
new QuestionCard('What was the hottest commodity of 2020?', ['Hand Sanitizer', 'Puzzles', 'Toilet Paper', 'Fitness Equipment'], 'Toilet Paper', 'q02');

// question 3
new QuestionCard('What is the proper way to wear a mask?', ['Mask covers nose and mouth and eyes', 'Mask covers nose and mouth and secure it under your chin', 'Mask covers mouth and chin', 'Mask is left in the car or at home'], 'Mask covers nose and mouth and secure it under your chin', 'q03');

// question 4
new QuestionCard('Bong Joon Ho made history as the first South Korean to win the Best Director Oscar for which movie?', ['Parasite', 'Onward', 'Mulan', 'The Invisible Man'], 'Parasite', 'q04');

// question 5
new QuestionCard('What popular DIY coffee went viral?', ['Affogato', 'Doppio Espresso', 'Espresso Ristretto', 'Dalgona Coffee'], 'Dalgona Coffee', 'q05');

// question 6
new QuestionCard('What is the name of the virus that caused the pandemic?', ['AREA 51', 'COVID 19', 'Heinekenvirus', 'HCorona 22'], 'COVID 19', 'q06');

// question 7
new QuestionCard('What are we nicknaming children who were conceived during the pandemic?', ['Pandemic Babies', 'Maskers', 'Baby Boomers', 'Karens'], 'Pandemic Babies', 'q07');

// question 8
new QuestionCard('Who was elected president?', ['Barack Obama', 'Kanye West', 'Donald Trump', 'Joe Biden'], 'Joe Biden', 'q08', 'png');

// question 9
new QuestionCard('Not known to the area, which winged insect caused alarm when spotted in Washington State?', ['Killer Butterflies', 'Killer Bees', 'Murder Hornets', 'Zombie Moths'], 'Murder Hornets', 'q09');

// question 10
new QuestionCard('What was the name of the planet identified by a high school intern at NASA?', ['XI 1200 b', 'R2D2 3000', 'CP4 4000 a', 'TOI 1338 b'], 'TOI 1338 b', 'q10');

// question 11
new QuestionCard('Which social media challenge had people trying to defy gravity on February 10, 2020?', ['The Broom Challenge', 'The Level Up Challenge', 'The Stand Up Challenge', 'The Plank Challenge'], 'The Broom Challenge', 'q11');

// question 12
new QuestionCard('Everyone knows that Carol Baskin killed her husband, but can you remember what his name was?', ['Howard Baskin', 'Joe Lewis', 'Don Lewis', 'Hermit Baskin'], 'Don Lewis', 'q12');

// question 13
new QuestionCard('There are seven speakers sprinkled across which country allowing you to broadcast your built up 2020 scream?', ['Ireland', 'Finland', 'New Zealand', 'Iceland'], 'Iceland', 'q13', 'png');

// question 14
new QuestionCard('Which celebrity was the first to publicly announce they had tested positive for Coronavirus?', ['Mel Gibson', 'Ellen DeGeneres', 'Larry King', 'Tom Hanks'], 'Tom Hanks', 'q14', 'png');

// question 15
new QuestionCard('Which leading cartoon character was confirmed as a member of the LGBTQ Community?', ['Curious George', 'Jimmy Neutron', 'BoJack Horseman', 'Spongebob'], 'Spongebob', 'q15');

// question 16
new QuestionCard('Videos were released by the Pentagon admitting what are real?', ['Aliens', 'Giants', 'UFOs', 'Underground Cities'], 'UFOs', 'q16', 'png');

// question 17
new QuestionCard('Who performed the Super Bowl LIV halftime show?', ['The Weeknd', 'Shakira and JLO', 'Maroon 5', 'Beyonce and JayZ'], 'Shakira and JLO', 'q17');

// question 18
new QuestionCard('Which celebrity NBA player sadly passed away?', ['Kobe Bryant', 'Michael Jordan', 'Shaquille O’Neal', 'Charles Barkley'], 'Kobe Bryant', 'q18');

// question 19
new QuestionCard('What was the most Googled recipe in 2020?', ['Doubletree Cookie', 'Dole Whip', 'Disney Churro', 'Sourdough Bread'], 'Sourdough Bread', 'q19');

// question 20
new QuestionCard('A baby was born from an embryo that was how old?', ['27 years old', '64 years old', '18 years old', '34 years old'], '27 years old', 'q20');

// render the questions
questionArray[index].renderQuestion();




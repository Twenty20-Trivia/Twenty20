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

new QuestionCard('What was the most popular show streamed on Netflix?', ['The Crown', 'Tiger King', 'Lucifer', 'Ozark'], 'Ozark');
new QuestionCard('What was the hottest commodity of 2020?', ['Hand Sanitizer', 'Puzzles', 'Toilet Paper', 'Fitness Equipment'], 'Toilet Paper');
new QuestionCard('What is the proper way to wear a mask?', ['Mask covers nose and mouth and eyes', 'Mask covers nose and mouth and secure it under your chin', 'Mask covers mouth and chin', 'Mask is left in car or at home'], 'Mask covers nose and mouth and secure it under your chin');
new QuestionCard('Bong Joon Ho made history as the first South Korean to win the Best Director Oscar for which movie?', ['Parasite', 'Onward', 'Mulan', 'The Invisible Man'], 'Parasite');
new QuestionCard('What popular DIY coffee went viral?', ['Affogato', 'Doppio Espresso', 'Espresso Ristretto', 'Dalgona Coffee'], 'Dalgona Coffee');
new QuestionCard('What is the name of the virus that caused the pandemic?', ['AREA 51', 'COVID 19', 'Heinekenvirus', 'HCorona 22'], 'COVID 19');
new QuestionCard('What are we nicknaming children who were conceived during the pandemic?', ['Pandemic Babies', 'Maskers', 'Baby Boomers', 'Karens'], 'Pandemic Babies');
new QuestionCard('Who was elected president?', ['Barack Obama', 'Kanye West', 'Donald Trump', 'Joe Biden'], 'Joe Biden');
new QuestionCard('Not known to the area, which winged insect caused alarm when spotted in Washington State?', ['Killer Butterflies', 'Killer Bees', 'Murder Hornets', 'Zombie Moths'], 'Murder Hornets');
new QuestionCard('What was the name of the planet identified by a high school intern at NASA?', ['XI 1200 b', 'R2D2 3000', 'CP4 4000 a', 'TOI 1338 b'], 'TOI 1338 b');
new QuestionCard('Which social media challenge had people trying to defy gravity on Feb 10, 2020?', ['The Broom Challenge', 'The Level Up Challenge', 'The Stand Up Challenge', 'The Plank Challenge'], 'The Broom Challenge');
new QuestionCard('Everyone knows that Carol Baskin killed her husband, but can you remember what his name was?', ['Howard Baskin', 'Joe Lewis', 'Don Lewis', 'Hermit Baskin'], 'Don Lewis');
new QuestionCard('There are seven speakers sprinkled across which country allowing you to broadcast your built up 2020 scream?', ['Ireland', 'Finland', 'New Zealand', 'Iceland'], 'Iceland');
new QuestionCard('Which celebrity was the first to publicly announce they had been tested positive for Coronavirus?', ['Mel Gibson', 'Ellen DeGeneres', 'Larry King', 'Tom Hanks'], 'Tom Hanks');
new QuestionCard('Which leading cartoon character was confirmed as a member of the LGBTQ Community?', ['Curious George', 'Jimmy Neutron', 'BoJack Horseman', 'Spongebob'], 'Spongebob');
new QuestionCard('Videos were released by the Pentagon admitting what are real?', ['Aliens', 'Giants', 'UFOs', 'Underground Cities'], 'UFOs');
new QuestionCard('Who performed the Super Bowl LIV halftime show?', ['The Weekend', 'Shakira and JLO', 'Maroon 5', 'Beyonce and JayZ'], 'Shakira and JLO');
new QuestionCard('Which celebrity NBA player sadly passed away?', ['Kobe Bryant', 'Michael Jordan', 'Shaquille O’Neal', 'Charles Barkley'], 'Kobe Bryant');
new QuestionCard('What was the most Googled recipe in 2020', ['Doubletree Cookie', 'Dole Whip', 'Disney Churro', 'Sourdough Bread'], 'Sourdough Bread');
new QuestionCard('A baby was born from an embryo that was how old?', ['27 years old', '64 years old', '18 years old', '34 years old'], '27 years old');

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
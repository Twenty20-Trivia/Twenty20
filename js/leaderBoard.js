'use strict;';

// accesses and parses playerArray from local storage
let playerArray = JSON.parse(localStorage.getItem('playerArray'));

let leaderBoard = document.getElementById('leaderBoard').children[1];

let leaderBoardDisplay = 5;

playerArray.sort(compare);
console.log(playerArray);

function compare(a, b) {
  if (a.score < b.score) {
    return 1;
  }
  if (a.score > b.score) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

function renderLeaderBoard () {
  for (let i = 0; i < leaderBoardDisplay; i++) {
    if (playerArray[i]) {
      let tr = document.createElement('tr');
      let td = document.createElement('td');
      td.textContent = playerArray[i].name;
      tr.appendChild(td);
      td = document.createElement('td');
      td.textContent = playerArray[i].score;
      tr.appendChild(td);
      leaderBoard.appendChild(tr);
    }
  }
}

renderLeaderBoard();

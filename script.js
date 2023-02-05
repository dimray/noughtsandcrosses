let squaresClicked = []
let noughts = []
let crosses = []
let gameOver = false;

const winningCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

const playGame = document.querySelector(".grid-container");
const playerTurn = document.querySelector("h2");
const startGame = document.querySelector(".btn");

playGame.addEventListener("click", selector);

startGame.addEventListener("click", function () {
  const gameBoard = document.querySelectorAll(".square");
  gameBoard.forEach(square => {
    square.textContent = ""
    square.classList.remove("clicked");
  });
  squaresClicked = [];
  noughts = [];
  crosses = [];
  playerTurn.textContent = "X goes first";
  playGame.addEventListener("click", selector);
});

function selector(e) {
  e.target.classList.toggle("clicked");
  if (squaresClicked.includes(+e.target.id) === false) {
    squaresClicked.push(+e.target.id);
    if (squaresClicked.length % 2 == 0) {
      e.target.innerText = "O";
      noughts.push(+e.target.id);
      playerTurn.textContent = "X's turn";
      gameOver = true;
    } else {
      e.target.innerText = "X";
      crosses.push(+e.target.id);
      playerTurn.textContent = "O's turn";
      gameOver = true;
    }
    winningCombinations.forEach(combination => {
      if (combination.every(element => crosses.includes(element))) {
        playerTurn.textContent = "X wins!";
        playGame.removeEventListener("click", selector);
      }
      if (combination.every(element => noughts.includes(element))) {
        playerTurn.textContent = "O wins!";
        playGame.removeEventListener("click", selector);
      }
    });
  };
};






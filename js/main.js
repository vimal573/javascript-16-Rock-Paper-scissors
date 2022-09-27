const userScoreEl = document.getElementById("userScoreVal");
const compScoreEl = document.getElementById("compScoreVal");
const resultUserEl = document.getElementById("result-user-stat");
const resultCompEl = document.getElementById("result-comp-stat");
const resultFinalEl = document.getElementById("result-final-stat");
const rockBtn = document.getElementById("r");
const paperBtn = document.getElementById("p");
const scissorsBtn = document.getElementById("s");

let compScore = 0;
let userScore = 0;

const movesArray = ["rock", "paper", "scissors"];

rockBtn.addEventListener("click", () => {
  const userMove = "rock";
  const compMove = movesArray[Math.floor(Math.random() * 3)];

  resultUserEl.textContent = `User: ${userMove}`;
  resultCompEl.textContent = `Computer: ${compMove}`;

  if (compMove === "paper") {
    compScore++;
    resultFinalEl.textContent = `Winner: Computer Wins`;
    compScoreEl.textContent = compScore;
  } else if (compMove === "scissors") {
    userScore++;
    resultFinalEl.textContent = `Winner: User Wins`;
    userScoreEl.textContent = userScore;
  } else {
    resultFinalEl.textContent = `Winner: It's Draw`;
  }
});

paperBtn.addEventListener("click", () => {
  const userMove = "paper";
  const compMove = movesArray[Math.floor(Math.random() * 3)];

  resultUserEl.textContent = `User: ${userMove}`;
  resultCompEl.textContent = `Computer: ${compMove}`;

  if (compMove === "scissors") {
    compScore++;
    resultFinalEl.textContent = `Winner: Computer Wins`;
    compScoreEl.textContent = compScore;
  } else if (compMove === "rock") {
    userScore++;
    resultFinalEl.textContent = `Winner: User Wins`;
    userScoreEl.textContent = userScore;
  } else {
    resultFinalEl.textContent = `Winner: It's Draw`;
  }
});

scissorsBtn.addEventListener("click", () => {
  const userMove = "scissors";
  const compMove = movesArray[Math.floor(Math.random() * 3)];

  resultUserEl.textContent = `User: ${userMove}`;
  resultCompEl.textContent = `Computer: ${compMove}`;

  if (compMove === "rock") {
    compScore++;
    resultFinalEl.textContent = `Winner: Computer Wins`;
    compScoreEl.textContent = compScore;
  } else if (compMove === "paper") {
    userScore++;
    resultFinalEl.textContent = `Winner: User Wins`;
    userScoreEl.textContent = userScore;
  } else {
    resultFinalEl.textContent = `Winner: It's Draw`;
  }
});

let playerScore = 0;
let computerScore = 0;

const resultText = document.getElementById("result-text");
const scoreText = document.getElementById("score-text");
const buttons = document.querySelectorAll(".choice-btn");
const resetBtn = document.getElementById("reset-btn");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    resultText.textContent = `Draw! You both chose ${playerChoice}.`;
    return;
  }

  const win =
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper");

  if (win) {
    playerScore++;
    resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }

  scoreText.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    playRound(btn.dataset.choice);
  });
});

resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  resultText.textContent = "";
  scoreText.textContent = "Player: 0 | Computer: 0";
});

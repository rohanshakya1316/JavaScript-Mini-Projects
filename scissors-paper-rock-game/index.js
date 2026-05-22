const buttons = document.querySelectorAll("button");

const result = document.getElementById("result");

const userScore = document.getElementById("user-score");

const botScore = document.getElementById("bot-score");

let uScore = 0;

let bScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const output = playRound(button.id, botPlay());
    result.textContent = output;
  });
});

const botPlay = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    uScore++;
    userScore.textContent = uScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    bScore++;
    botScore.textContent = bScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
};

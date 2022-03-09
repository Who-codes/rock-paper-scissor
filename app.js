const firstScreen = document.querySelector(".container");
const lastScreen = document.querySelector(".last-screen");
const lastScreenText = document.querySelector(".last-screen-text");
const weapons = document.querySelectorAll("a");
const playAgainBtn = document.querySelector(".btn");
const playerCard = document.querySelector(".player-card img");
const computerCard = document.querySelector(".computer-card img");
const playerPoint = document.querySelector(".player-point");
const computerPoint = document.querySelector(".computer-point");
const result = document.querySelector(".result");

weapons.forEach((link) => link.addEventListener("click", playerPlay));

playAgainBtn.addEventListener("click", toggleElement);

function playerPlay(e) {
  let playerSelection;
  let computerSelection = computerPlay();
  e.target.textContent != ""
    ? (playerSelection = e.target.textContent)
    : (playerSelection = e.target.parentElement.textContent);

  setImg(playerSelection, computerSelection);
  play(playerSelection, computerSelection);
  gameEnd();
}

function computerPlay() {
  let arr = ["Rock", "Paper", "Scissor"];
  return arr[Math.floor(Math.random() * 3)];
}

function setImg(player, computer) {
  playerCard.src = `/images/${player}.svg`;
  computerCard.src = `/images/${computer}.svg`;
}

function play(player, computer) {
  if (player === computer) {
    result.textContent = `It's a tie`;
  } else {
    if (player === "Rock") {
      if (computer === "Paper") {
        computerPoint.textContent = Number(computerPoint.textContent) + 1;
        result.textContent = `${computer} beats ${player}`;
      } else {
        playerPoint.textContent = Number(playerPoint.textContent) + 1;
        result.textContent = `${player} beats ${computer}`;

      }
    } else if (player === "Paper") {
      if (computer === "Scissor") {
        computerPoint.textContent = Number(computerPoint.textContent) + 1;
        result.textContent = `${computer} beats ${player}`;
      } else {
        playerPoint.textContent = Number(playerPoint.textContent) + 1;
        result.textContent = `${player} beats ${computer}`;
      }
    } else {
      if (computer === "Rock") {
        computerPoint.textContent = Number(computerPoint.textContent) + 1;
        result.textContent = `${computer} beats ${player}`;
      } else {
        playerPoint.textContent = Number(playerPoint.textContent) + 1;
        result.textContent = `${player} beats ${computer}`;
      }
    }
  }
}

function gameEnd() {
  const br = document.createElement('br')
  if (playerPoint.textContent === "5" || computerPoint.textContent === "5") {
    if (playerPoint.textContent === "5") {
      lastScreenText.innerHTML = `You Win! 
      <br> Player Point: ${playerPoint.textContent}
      <br> Computer Point: ${computerPoint.textContent}
      <br> Click on play again to play again`;
    } else {
      lastScreenText.innerHTML = `You Lost!
      <br> Computer Point: ${computerPoint.textContent}
      <br> Player Point: ${playerPoint.textContent}
      <br> Click on play again to play again`;
    }
    playerPoint.textContent = "0";
    computerPoint.textContent = "0";
    toggleElement();
  }
}

function toggleElement() {
  firstScreen.classList.toggle("hide");
  lastScreen.classList.toggle("hide");
}

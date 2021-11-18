const gameChoice = [`rock`, `paper`, `scissors`];

function computerPlay() {
  return gameChoice[Math.floor(Math.random() * gameChoice.length)];
}

let playerScore = 0;
let computerScore = 0;
let draws = 0;

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  if (playerSelection == computerSelection) {
    document.getElementById("result").textContent = "It's a Tie";
    let tie = document.getElementById("tie");
    tie.innerHTML = parseInt(tie.innerHTML) + 1;
    return;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    document.getElementById("result").textContent = "Computer Wins !X_X!";
    let compScore = document.getElementById("compScore");
    compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
    return "computer";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    document.getElementById("result").textContent = "Player Wins !=)!";
    let pScore = document.getElementById("pScore");
    pScore.innerHTML = parseInt(pScore.innerHTML) + 1;
    return "player";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    document.getElementById("result").textContent = "Computer Wins !X_X!";
    let compScore = document.getElementById("compScore");
    compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
    return "computer";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    document.getElementById("result").textContent = "Player Wins !=)!";
    let pScore = document.getElementById("pScore");
    pScore.innerHTML = parseInt(pScore.innerHTML) + 1;
    return "player";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    document.getElementById("result").textContent = "Player Wins !=)!";
    let pScore = document.getElementById("pScore");
    pScore.innerHTML = parseInt(pScore.innerHTML) + 1;
    return "player";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    document.getElementById("result").textContent = "Computer Wins !X_X!";
    let compScore = document.getElementById("compScore");
    compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
    return "computer";
  }
}

function playRoundWrapper(playerSelection) {
  const winner = playRound(playerSelection);

  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
    // handle computer win
  }

  // Created a function to reset the scores
  function resetScores() {
    playerScore = 0;
    computerScore = 0;
    tie.innerHTML = 0;
  }

  // This handles the results when either the player of the computer get to 5
  if (playerScore === 5) {
    document.getElementById("result").textContent =
      "You got to 5 first, you win!";
    resetScores();
  } else if (computerScore === 5) {
    document.getElementById("result").textContent =
      "The computer got to 5 first, you lose!";
    resetScores();
  }

  pScore.innerHTML = playerScore;
  compScore.innerHTML = computerScore;
}

// game resets when one score gets to 5, does not log the winner - annoying, lots more reading.
// need to stop the draw counter infinite count
// make the game alert who won when score = 5 wins

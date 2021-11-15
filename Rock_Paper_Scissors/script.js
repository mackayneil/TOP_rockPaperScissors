const gameChoice = [`rock`, `paper`, `scissors`];

function computerPlay(){
    return gameChoice[Math.floor(Math.random() * gameChoice.length)];   
}


// player choice is passed to the function  below to then compare the computer choice
function playRound(playerSelection) {
  const computerSelection = computerPlay();
  if (playerSelection == computerSelection){
    document.getElementById("result").textContent = "It's a Tie";
    let tie = document.getElementById("tie");
    tie.innerHTML = parseInt(tie.innerHTML) + 1;
    return;
  } else if(playerSelection ==="rock" && computerSelection ==="paper"){
    document.getElementById("result").textContent = "Computer Wins !X_X!";
    let compScore = document.getElementById("compScore");
    compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
    return;
  } else if(playerSelection ==="paper" && computerSelection ==="rock"){
    document.getElementById("result").textContent = "Player Wins !=)!";
    let pScore = document.getElementById("pScore");
    pScore.innerHTML = parseInt(pScore.innerHTML) + 1;
    return;
    //let playerScore = document.getElementById(`pScore`).innerHTML;
    //console.log(playerScore);
// game works but need to increment the player and computer score depending on who won? - increment variable value? change these if statements to functions? 
  } else if(playerSelection ==="paper" && computerSelection ==="scissors"){
    document.getElementById("result").textContent = "Computer Wins !X_X!";
    let compScore = document.getElementById("compScore");
    compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
    return;
  } else if(playerSelection ==="scissors" && computerSelection ==="paper"){
    document.getElementById("result").textContent = "Player Wins !=)!";
    let pScore = document.getElementById("pScore");
    pScore.innerHTML = parseInt(pScore.innerHTML) + 1;
    return;
  } else if(playerSelection ==="rock" && computerSelection ==="scissors"){
    document.getElementById("result").textContent = "Player Wins !=)!";
    let pScore = document.getElementById("pScore");
    pScore.innerHTML = parseInt(pScore.innerHTML) + 1;
    return;
  } else if(playerSelection ==="scissors" && computerSelection ==="rock"){
    document.getElementById("result").textContent = "Computer Wins !X_X!";
    let compScore = document.getElementById("compScore");
    compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
    return;
  }
}

function resetGame() {
  
  }

// make the game alert who won when score = 5 wins || Done in a function? 

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function reset(){
    humanScore = 0;
    computerScore = 0;
    currentRoundNumber = 1;
}

function generateTarget(){
  return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, computerGuess, tartget){
  if(userGuess < 0 || userGuess > 9){
    alert("The entered number is out of range");
  }
  
  let userDiff = Math.abs(tartget - userGuess);
  let compDiff = Math.abs(tartget - computerGuess);
  if(userDiff <= compDiff){
    return true;
  }
  return false;
}

function updateScore(winner){
  if(winner == 'human'){
    humanScore++;
  }else{
    computerScore++;
  }
}

function advanceRound(){
  currentRoundNumber++;
}



const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' ||
       userInput === 'paper' ||
       userInput === 'scissors' ||
       userInput === 'bomb'){
         return userInput;
       }else{
         console.log('Invalid input. Please, enter "rock", "paper", or "scissors"');
       }
  };
  
  function getComputerChoice(){
    const num = Math.floor(Math.random() * 3)
    switch (num) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    }
  }
  
  function determineWinner(userChoice, computerChoice){
    if(userChoice === 'bomb'){
      return "User won!";
    }
  
    if(userChoice === computerChoice){
      return "It's a tie!";
    }
  
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return "Computer won!";
      }else{
        return "User won!";
      }
    }
  
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return "Computer won!";
      }else{
        return "User won!";
      }
    }
  
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return "Computer won!";
      }else{
        return "User won!";
      }
    }
  }
  
  const playGame = () =>{
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame()
  
  
function getRandomInt(){
    //COMPUTE a random number between 0 & 2 inclusive and return to calling
    //function
    return Math.floor(Math.random()* 3);
}

function getComputerChoice(){
    //CALL getRandomInt use value to pick on of either "rock","paper"or "scissors"
    let randomInt = getRandomInt();

    switch(randomInt) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let buttonChoices = document.querySelector("#button-choices");
let scoreBoard = document.querySelector("#score");
let roundOutcome = document.createElement('h2');
let roundDetails = document.createElement('p');
let gameScore = document.createElement('h3');

buttonChoices.addEventListener('click',(event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            playRound('rock',getComputerChoice());
            checkScore();
            break;
        case 'paper':
            playRound('paper',getComputerChoice());
            checkScore();
            break;
        case 'scissors':
            playRound('scissors',getComputerChoice());
            checkScore();
            break;

    }
})

function checkScore(){
    if (humanScore === 5){
        roundOutcome.textContent = `You Won! ${humanScore} to ${computerScore}`;
        scoreBoard.replaceChildren();
        scoreBoard.appendChild(roundOutcome);
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5){
        roundOutcome.textContent = `You Lost! ${computerScore} to ${humanScore}`;
        scoreBoard.replaceChildren();
        scoreBoard.appendChild(roundOutcome);
        humanScore = 0;
        computerScore = 0;
    }
}

function updateScoreBoard(outcome,currentHumanScore,currentComputerScore,currentHumanChoice,currentComputerChoice){
    if (outcome === true){
        scoreBoard.replaceChildren();
        roundOutcome.textContent = `YOU WIN THIS ROUND!`;
        roundDetails.textContent = `${currentHumanChoice} beats ${currentComputerChoice}`
        gameScore.textContent = `Score You:${currentHumanScore} Computer:${currentComputerScore}`;
        scoreBoard.append(roundOutcome,roundDetails, gameScore);
    } else if (outcome === 'draw'){
         scoreBoard.replaceChildren();
        roundOutcome.textContent = `DRAW!`;
        roundDetails.textContent = `Your Choice of ${currentHumanChoice} is
        the same as the computers choice of ${currentComputerChoice}`
        gameScore.textContent = `Score You:${currentHumanScore} Computer:${currentComputerScore}`;
        scoreBoard.append(roundOutcome,roundDetails, gameScore);
    } else {
         scoreBoard.replaceChildren();
        roundOutcome.textContent = `YOU LOSE THIS ROUND!`;
        roundDetails.textContent = `${currentComputerChoice} beats ${currentHumanChoice}`
        gameScore.textContent = `Score You:${currentHumanScore} Computer:${currentComputerScore}`;
        scoreBoard.append(roundOutcome,roundDetails, gameScore);
    }

}
    let humanScore = 0,
    computerScore = 0;

function playRound(humanChoice,computerChoice) {
    // Get humanChoice and computerChoice, determine who wins, output outcome and current score.
    if (humanChoice == "rock" && computerChoice == "scissors"){
        ++humanScore;
        updateScoreBoard(true,humanScore,computerScore,humanChoice,computerChoice);
    } else if (humanChoice == "paper" && computerChoice == "rock"){
         ++humanScore;
        updateScoreBoard(true,humanScore,computerScore,humanChoice,computerChoice);
    } else if (humanChoice == 'scissors' && computerChoice == "paper"){
         ++humanScore;
        updateScoreBoard(true,humanScore,computerScore,humanChoice,computerChoice);
    } else if (humanChoice === computerChoice){
        updateScoreBoard("draw",humanScore,computerScore,humanChoice,computerChoice);
    }else {
        ++computerScore;
        updateScoreBoard(false,humanScore,computerScore,humanChoice,computerChoice);}
}




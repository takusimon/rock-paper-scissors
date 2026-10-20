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
let gameScore = document.querySelector("#score");

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
        gameScore.textContent = `You Won! ${humanScore} to ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5){
        gameScore.textContent = `You Lost! ${computerScore} to ${humanScore}`;
        humanScore = 0;
        computerScore = 0;
    }
}

function updateScoreBoard(outcome,currentHumanScore,currentComputerScore,currentHumanChoice,currentComputerChoice){
    if (outcome === true){
        gameScore.textContent = `YOU WIN THIS ROUND!\n ${currentHumanChoice}
        beats ${currentComputerChoice}\n
        Score You:${currentHumanScore} Computer:${currentComputerScore}`;
    } else if (outcome === 'draw'){
        gameScore.textContent = `ITS A DRAW!\n both chose ${currentHumanChoice} Score You:${currentHumanScore} Computer:${currentComputerScore}`
    } else {
        gameScore.textContent = `YOU LOSE THIS ROUND!\n ${currentComputerChoice} beats ${currentHumanChoice}\n
        Score You:${currentHumanScore} Computer:${currentComputerScore}`;
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




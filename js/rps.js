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

function getHumanChoice(){
    //OBTAIN user choice, return to calling function
    return prompt("Rock,Paper or Scissors?").toLowerCase();

}
let humanScore = 0,
    computerScore = 0;

function playRound(humanChoice,computerChoice) {
    // Get humanChoice and computerChoice, determine who wins, output outcome and current score
    if (humanChoice == "rock" && computerChoice == "scissors"){
        ++humanScore;
        return console.log("You win! Rock beats Scissors.\n" + `Score You:${humanScore} Computer:${computerScore}`);
    } else if (humanChoice == "paper" && computerChoice == "rock"){
         ++humanScore;
        return console.log("You win! Paper beats Rock.\n" + `Score You:${humanScore} Computer:${computerScore}`);
    } else if (humanChoice == 'scissors' && computerChoice == "paper"){
         ++humanScore;
        return console.log("You win! Scissors beats Rock.\n" + `Score You:${humanScore} Computer:${computerScore}`);
    } else if (humanChoice === computerChoice){
        return console.log(`Draw! both choices are the same!`);
    }else {
        ++computerScore;
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}.\n` + `Score You:${humanScore} Computer:${computerScore}`);}
}

playRound(getHumanChoice(),getComputerChoice());
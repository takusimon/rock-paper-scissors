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
console.log(getComputerChoice());
console.log(getHumanChoice());
function getRandomInt(){
    //COMPUTE a random number between 0 & 2 inclusive and return to calling
    //function
    return Math.floor(Math.random()* 3);
}

function getComputerChoice(){
    //Call getRandomInt use value to pick on of either "rock","paper"or "scissors"
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

console.log(getComputerChoice());
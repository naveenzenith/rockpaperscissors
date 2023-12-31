function getComputerChoice(){
    let randval=Math.floor(Math.random()*3);
    if(randval==0) return "rock";
    else if(randval==1) return "paper";
    else return "scissors";
}

function decideWinner(playerSelection,computerSelection){
    let result=-1;
    if(playerSelection==computerSelection){
        return result;
    }
    else if(playerSelection=='rock'){
        if(computerSelection!='paper') result=1;
        else result=0;
    }
    else if(playerSelection=='paper'){
        if(computerSelection!='scissors') result=1;
        else result=0;
    }
    else{
        if(computerSelection!='rock') result=1;
        else result=0;
    }

}
function game(){
    let result;
    let playerSelection=prompt("Enter your choice(rock,paper,scissors):");
    playerSelection=playerSelection.toLowerCase();
    let computerSelection=getComputerChoice();
    console.log("The computer choice is "+computerSelection);
    result=decideWinner(playerSelection,computerSelection);
    if(result==-1){
        console.log("It's a tie! replay!");
        game();
    }
    else if(result==1) console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    else console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return result;
}

function start(){
    let playerScore=0;
    let computerScore=0;
    let result;
    console.log("playerScore: "+playerScore);
    console.log("computerscore: "+computerScore);
    for(let i=0;i<3;i++){
        console.log(`Round ${i+1}`);
        result=game();
        if(result==1) playerScore++;
        else computerScore++;
        console.log("playerScore: "+playerScore);
        console.log("computerscore: "+computerScore);
    }
    if(playerScore>computerScore) console.log("you win!");
    else console.log("you lose");
}


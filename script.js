let playerScore = 0;
let computerScore = 0;
let count = 0;
const score = document.querySelector('#score');

function updateScore() {
    score.innerHTML = 'Player Score: ' + playerScore + '<br>' + 'Computer Score: ' + computerScore;
}

function displayResult() {
    // Check if 5 rounds have been completed
    if (count == 5) {
        const description = document.querySelector('#description');
        if (playerScore > computerScore) description.textContent = "You win!";
        else description.textContent = "You lose";
    }
}

function getComputerChoice() {
    let randval = Math.floor(Math.random() * 3);
    if (randval == 0) return "rock";
    else if (randval == 1) return "paper";
    else return "scissors";
}

function decideWinner(playerSelection, computerSelection) {
    let result = -1;
    if (playerSelection == computerSelection) {
        return result;
    } else if (playerSelection == 'rock') {
        if (computerSelection != 'paper') result = 1;
        else result = 0;
    } else if (playerSelection == 'paper') {
        if (computerSelection != 'scissors') result = 1;
        else result = 0;
    } else {
        if (computerSelection != 'rock') result = 1;
        else result = 0;
    }
    return result;
}

function game(playerSelection) {
    if (count >= 6) return;

    let result;
    let computerSelection = getComputerChoice();

    let div = document.createElement('div');
    if (computerSelection == 'rock') {
        const rockclone = rock.cloneNode(true);
        rockclone.style.width = '70%';
        rockclone.style.height = 'auto';
        div.appendChild(rockclone);
    } else if (computerSelection == 'paper') {
        const paperclone = paper.cloneNode(true);
        paperclone.style.width = '70%';
        paperclone.style.height = 'auto';
        div.appendChild(paperclone);
    } else {
        const scissorsclone = scissors.cloneNode(true);
        scissorsclone.style.width = '70%';
        scissorsclone.style.height = 'auto';
        div.appendChild(scissorsclone);
    }

    if (computer.lastChild != null) computer.replaceChild(div, computer.lastChild);
    else computer.appendChild(div);

    const description = document.querySelector('#description');
    result = decideWinner(playerSelection, computerSelection);
    if (result == -1) {
        description.textContent = "It's a tie! replay!";
        game(playerSelection);
    } else if (result == 1) {
        description.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else {
        description.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
    }

    updateScore();
    displayResult();
    
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const user = document.querySelector('#user');
const computer = document.querySelector('#computer');

rock.addEventListener('click', () => {
    let div = document.createElement('div');
    const rockclone = rock.cloneNode(true);
    rockclone.style.width = '70%';
    rockclone.style.height = 'auto';
    div.appendChild(rockclone);
    if (user.lastChild != null) user.replaceChild(div, user.lastChild);
    else user.appendChild(div);
    count++;
    game('rock');
});

paper.addEventListener('click', () => {
    let div = document.createElement('div');
    const paperclone = paper.cloneNode(true);
    paperclone.style.width = '70%';
    paperclone.style.height = 'auto';
    div.appendChild(paperclone);
    if (user.lastChild != null) user.replaceChild(div, user.lastChild);
    else user.appendChild(div);
    count++;
    game('paper');
});

scissors.addEventListener('click', () => {
    let div = document.createElement('div');
    const scissorsclone = scissors.cloneNode(true);
    scissorsclone.style.width = '70%';
    scissorsclone.style.height = 'auto';
    div.appendChild(scissorsclone);
    if (user.lastChild != null) user.replaceChild(div, user.lastChild);
    else user.appendChild(div);
    count++;
    game('scissors');
});

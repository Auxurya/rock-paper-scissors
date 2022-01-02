let computerScore = 0, playerScore = 0;
let result = 'PLAY YOUR HAND';
let results = document.getElementById('results');
results.innerHTML = `<p>PLAYER [${playerScore}] <span>${result}</span> [${computerScore}] COMPUTER</p>`;


let choices = ['Rock', 'Paper', 'Scissors'];
let computerPlay = () => choices[Math.floor(Math.random() * 3)];
let playerSelection;

window.addEventListener('click', event => {
    playerSelection = event.target.alt;
    playRound();
});


let playRound = () => {
    let computerSelection = computerPlay();
    switch(playerSelection) {
        case 'Rock':
                if(computerSelection == 'Paper' || computerSelection == 'Scissors') {

                } else {
                    results.innerHTML = `<p>PLAYER [${playerScore}] <span>It's a draw! ${playerSelection} matches ${computerSelection}.</span> [${computerScore}] COMPUTER</p>`;
                };
                break;
        case 'Paper':
                if(computerSelection == 'Rock' || computerSelection == 'Scissors') {

                } else {
                    results.innerHTML = `<p>PLAYER [${playerScore}] <span>It's a draw! ${playerSelection} matches ${computerSelection}.</span> [${computerScore}] COMPUTER</p>`;
                };
                break;
        case 'Scissors':
                if(computerSelection == 'Paper' || computerSelection == 'Rock') {

                } else {
                    results.innerHTML = `<p>PLAYER [${playerScore}] <span>It's a draw! ${playerSelection} matches ${computerSelection}.</span> [${computerScore}] COMPUTER</p>`;
                };
                break;
    };
};



let resetButton = document.getElementById('reset');
const reset = () => {
    let computerScore = 0, playerScore = 0;
    let result = 'PLAY YOUR HAND';
    let results = document.getElementById('results');
    results.innerHTML = `<p>PLAYER [${playerScore}] <span>${result}</span> [${computerScore}] COMPUTER</p>`;
}
resetButton.addEventListener('click', reset);

// let game = () => {
//     let rounds = prompt('How many rounds of \'Rock, Paper, Scissors\' would you like to play?: ')
//     computerScore = 0, playerScore = 0;
//     for(i = 0; i < rounds; i++) {
//         playRound();
//     };
//     alert(`Final Score: PLAYER [${playerScore}] VS. [${computerScore}] COMPUTER`)
//     computerScore = 0, playerScore = 0;
// };

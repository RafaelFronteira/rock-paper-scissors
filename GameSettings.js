
const score = {
    player: 0,
    cpu: 0
};
const moves = ['rock', 'paper', 'scissors'];


function getUserMove(move) {
    console.log(move)
    checkWinner(move);
}

function getCpuMove() {
    return moves[Math.floor(Math.random() * moves.length)];
}

function checkWinner(userMove) {
    const cpuMove = getCpuMove();

    switch(userMove + cpuMove) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            console.log('WIN');
            score.player++;
            break;
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            console.log('Lose');
            score.cpu++;
            break;
        default:
            console.log('DRAW');
    }

    setGameHistory(userMove, cpuMove);
    setGameScore();
}


function setGameHistory(userMove, cpuMove) {
    const $divScoreHistory = document.querySelector('#score-history');
    const gameHistory = 
    `<div class="score-history-container">
        <span title="${userMove}"><img class="history-img" src="/assets/${userMove}.png" alt="${userMove}"></span>
        <span title="${cpuMove}"><img class="history-img" src="/assets/${cpuMove}.png" alt="${cpuMove}"></span> 
    </div>`;

    $divScoreHistory.insertAdjacentHTML('afterbegin', gameHistory);
}

function setGameScore() {
    document.getElementById('user-score').innerText = score.player;
    document.getElementById('cpu-score').innerText = score.cpu;
}
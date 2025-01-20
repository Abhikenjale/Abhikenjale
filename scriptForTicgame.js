const board = document.getElementById('board');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let gameActive = true;
let gameState = Array(9).fill(null);

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function createBoard() {
  board.innerHTML = '';
  gameState.forEach((_, index) => {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = index;
    cell.addEventListener('click', handleCellClick);
    board.appendChild(cell);
  });
}

function handleCellClick(event) {
  const cell = event.target;
  const index = cell.dataset.index;

  if (!gameActive || gameState[index]) return;

  gameState[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add('taken');

  if (checkWin()) {
    message.textContent = `${currentPlayer} wins!`;
    gameActive = false;
    return;
  }

  if (gameState.every(cell => cell)) {
    message.textContent = 'It\'s a draw!';
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  message.textContent = `It's ${currentPlayer}'s turn.`;
}

function checkWin() {
  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
  });
}

function resetGame() {
  currentPlayer = 'X';
  gameActive = true;
  gameState = Array(9).fill(null);
  message.textContent = `It's ${currentPlayer}'s turn.`;
  createBoard();
}

resetButton.addEventListener('click', resetGame);

createBoard();
message.textContent = `It's ${currentPlayer}'s turn.`;

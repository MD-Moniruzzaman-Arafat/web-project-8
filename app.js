const startButton = document.getElementById('start-button');

startButton.addEventListener('click', function () {
    console.log('Start button clicked');
    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');

    // Hide the start screen and show the game screen
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
});

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabetsArray = alphabets.split('');
// console.log(alphabetsArray);

document.getElementById('show-alphabet').innerText = alphabetsArray[Math.floor(Math.random() * alphabetsArray.length)];
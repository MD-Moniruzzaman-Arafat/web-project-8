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


let score = 0;
document.addEventListener('keyup', function (event) {
    console.log(event.key);
    const showAlphabet = document.getElementById('show-alphabet');
    console.log(showAlphabet.innerText.toLocaleLowerCase());
    if (event.key.toLocaleLowerCase() === showAlphabet.innerText.toLocaleLowerCase()) {
        score = score + 1;
        console.log('Correct key pressed');
        showAlphabet.innerText = alphabetsArray[Math.floor(Math.random() * alphabetsArray.length)];
        const liveScore = document.querySelector('.live-score');
        liveScore.innerText = score;
    } else {
        console.log('Wrong key pressed');
        const gameOverScreen = document.getElementById('game-over-screen');
        gameOverScreen.classList.remove('hidden');
        const gameScreen = document.getElementById('game-screen');
        gameScreen.classList.add('hidden');
        document.getElementById('alphabet-score').innerText = score;
    }
})

const againStartButton = document.getElementById('again-start-button');
againStartButton.addEventListener('click', function () {
    console.log('Again Start button clicked');
    const gameOverScreen = document.getElementById('game-over-screen');
    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');
    const liveScore = document.querySelector('.live-score');
    // Reset score
    score = 0;
    liveScore.innerText = 0;

    // Hide the game over screen and show the start screen
    gameOverScreen.classList.add('hidden');
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
});
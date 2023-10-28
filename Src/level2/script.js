let score = 0;
let time = 10; // Set the initial time to 10 seconds
let timerInterval;
let rewardTimeout;
let audioPlayed = false;

const startContainer = document.getElementById("start-container");
const startButton = document.getElementById("start-button");
const gameContainer = document.getElementById("game-container");
const gameButton = document.getElementById("game-button");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const rewardPopup = document.getElementById("reward-popup");
const rewardTimer = document.getElementById("reward-timer");
const rewardAudio = document.getElementById("reward-audio");
const gameOver = document.getElementById("game-over");

function startGame() {
  startContainer.style.display = "none";
  gameContainer.style.display = "block";
  startTimer();
}

function startTimer() {
  timerInterval = setInterval(() => {
    time--;
    timerDisplay.textContent = `Time: ${time}`;
    if (time <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timerInterval);
  gameButton.removeEventListener("click", incrementScore);
  gameButton.style.display = "none";
  gameOver.style.display = "block"; // Show the "Game Over" message
  document.body.style.backgroundColor = "#000000";
  showRewardPopup();
  setTimeout(() => {
    alert("Since we're nice, we will move you to the final challenge");
    window.location.href = "../level3/level3.html";
  }, 3000); // Display the alert after 5 seconds
}

function incrementScore() {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
  moveButtonRandomly();
}

function moveButtonRandomly() {
  const maxX = gameContainer.clientWidth - gameButton.clientWidth;
  const maxY = gameContainer.clientHeight - gameButton.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  gameButton.style.left = randomX + "px";
  gameButton.style.top = randomY + "px";
}

function showRewardPopup() {
  rewardPopup.style.display = "block";
  if (!audioPlayed) {
    rewardAudio.play();
    audioPlayed = true;
  }
  setTimeout(() => {
    rewardPopup.style.display = "none";
    rewardTimer.textContent = "";
    rewardAudio.pause();
  }, 7000);
}

startButton.addEventListener("click", startGame);
gameButton.addEventListener("click", incrementScore);
moveButtonRandomly();

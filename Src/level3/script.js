document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const leftButton = document.getElementById("left-btn");
  const rightButton = document.getElementById("right-btn");
  const startButton = document.getElementById("start");
  const gameOverOverlay = document.getElementById("gameOver");
  const winnerOverlay = document.getElementById("winner");
  const restartButtons = document.querySelectorAll(".restart");

  // Initial game state
  let gameStarted = false;
  let isLeftButton = true; // Start with left button

  // Function to toggle buttons
  function toggleButtons() {
    isLeftButton = !isLeftButton;
    leftButton.classList.toggle("active");
    rightButton.classList.toggle("active");
  }

  // Function to start the game
  function startGame() {
    gameStarted = true;
    startButton.parentElement.style.display = "none";
  }

  // Function to end the game (with a win)
  function winGame() {
    winnerOverlay.style.display = "flex";
  }

  // Function to end the game (with a loss)
  function loseGame() {
    gameOverOverlay.style.display = "flex";
  }

  // Event listeners for website buttons
  leftButton.addEventListener("click", () => {
    if (gameStarted) {
      if (isLeftButton) {
        winGame();
      } else {
        loseGame();
      }
    }
  });

  rightButton.addEventListener("click", () => {
    if (gameStarted) {
      if (!isLeftButton) {
        winGame();
      } else {
        loseGame();
      }
    }
  });

  startButton.addEventListener("click", startGame);

  // Add event listeners to restart buttons if needed
  restartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      location.reload(); // Reload the page to start over
    });
  });
});

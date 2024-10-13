const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const startGameButton = document.getElementById("playButton");

startGameButton.addEventListener("click", function () {
  window.location.href = "html/game.html";
});

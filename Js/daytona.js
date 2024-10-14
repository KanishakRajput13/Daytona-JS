document.addEventListener("DOMContentLoaded", function() {
  const playButton = document.getElementById("playButton");
  const optionsModal = document.getElementById("buttonsModal");
  const backgroundModal = document.getElementById("background");
  const nextButton = document.getElementById("NextButton");
  const startGameButton = document.getElementById("startGameButton2");

  let selectedDifficulty = null;
  let selectedCar = null;
  let selectedBackground = null;

  // Show options menu
  playButton.addEventListener("click", function() {
      optionsModal.style.display = "block";
  });

  // Select difficulty
  document.querySelectorAll("#difficulty button").forEach(button => {
      button.addEventListener("click", function() {
          selectedDifficulty = this.getAttribute("value");
          document.querySelectorAll("#difficulty button").forEach(btn => btn.classList.remove("selected"));
          this.classList.add("selected");
          localStorage.setItem('selectedDifficulty', selectedDifficulty);
      });
  });

  // Select car
  document.querySelectorAll("#car button").forEach(button => {
      button.addEventListener("click", function() {
          selectedCar = this.getAttribute("value");
          document.querySelectorAll("#car button").forEach(btn => btn.classList.remove("selected"));
          this.classList.add("selected");
          localStorage.setItem('selectedCar', selectedCar);
      });
  });

  // Show background menu
  nextButton.addEventListener("click", function() {
      if (selectedDifficulty && selectedCar) {
          optionsModal.style.display = "none";
          backgroundModal.style.display = "block";
      } else {
          alert("Please select both difficulty and car.");
      }
  });

  // Select background
  document.querySelectorAll("#backgroundOptions button").forEach(button => {
      button.addEventListener("click", function() {
          selectedBackground = this.getAttribute("value");
          document.querySelectorAll("#backgroundOptions button").forEach(btn => btn.classList.remove("selected"));
          this.classList.add("selected");
          localStorage.setItem('selectedBackground', selectedBackground);
      });
  });

  // Start game
  startGameButton.addEventListener("click", function() {
      if (selectedBackground) {
          backgroundModal.style.display = "none";
          startGame(selectedDifficulty, selectedCar, selectedBackground);
      } else {
          alert("Please select a background.");
      }
  });

  // Close menu on outside click
  window.onclick = function(event) {
      if (event.target == optionsModal) {
          optionsModal.style.display = "none";
      } else if (event.target == backgroundModal) {
          backgroundModal.style.display = "none";
      }
  };

  // Start game function
  function startGame(difficulty, car, background) {
      alert("Game started with " + difficulty + " difficulty, " + car + " car, and " + background + " background selected!");
      window.location.href = "html/game.html";
  }
});
// Select elements
const minutesInput = document.getElementById("minutesInput");
const secondsInput = document.getElementById("secondsInput");
const timeDisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let countdownInterval; // Store the interval
let remainingTime; // Store the remaining time in seconds

// Update Time Display
function updateTimeDisplay() {
  const minutes = Math.floor(remainingTime / 60).toString().padStart(2, "0");
  const seconds = (remainingTime % 60).toString().padStart(2, "0");
  timeDisplay.textContent = `${minutes}:${seconds}`;
}

// Start Timer
startBtn.addEventListener("click", () => {
  const minutes = parseInt(minutesInput.value, 10) || 0;
  const seconds = parseInt(secondsInput.value, 10) || 0;

  if (countdownInterval) return; // Prevent multiple intervals
  if (minutes === 0 && seconds === 0) return; // Prevent starting with 0 time

  remainingTime = minutes * 60 + seconds;
  updateTimeDisplay();

  countdownInterval = setInterval(() => {
    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      countdownInterval = null;
      alert("Time's up!");
    } else {
      remainingTime--;
      updateTimeDisplay();
    }
  }, 1000);
});

// Pause Timer
pauseBtn.addEventListener("click", () => {
  clearInterval(countdownInterval);
  countdownInterval = null;
});

// Reset Timer
resetBtn.addEventListener("click", () => {
  clearInterval(countdownInterval);
  countdownInterval = null;
  remainingTime = 0;
  updateTimeDisplay();
});

// Input validation: Ensure seconds are between 0-59
startBtn.addEventListener("click", () => {
  const minutes = parseInt(minutesInput.value, 10) || 0;
  const seconds = parseInt(secondsInput.value, 10) || 0;

  if (seconds < 0 || seconds > 59) {
    alert("Seconds must be between 0 and 59.");
    return;
  }

  if (countdownInterval) return;
  if (minutes === 0 && seconds === 0) {
    alert("Please set a valid timer.");
    return;
  }

  remainingTime = minutes * 60 + seconds;
  updateTimeDisplay();

  countdownInterval = setInterval(() => {
    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      countdownInterval = null;
      alert("Time's up!");
    } else {
      remainingTime--;
      updateTimeDisplay();
    }
  }, 1000);
});
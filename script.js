// Countdown Timer
let timeLeft = 60;
const timerDisplay = document.getElementById("timer");

const countdown = setInterval(() => {
  timeLeft--;
  timerDisplay.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(countdown);
    timerDisplay.textContent = "Time's Up!";
  }
}, 1000);

// Fade animation for Join button
const joinBtn = document.getElementById("joinBtn");
let fade = true;
setInterval(() => {
  joinBtn.style.opacity = fade ? "0.7" : "1";
  fade = !fade;
}, 1000);

// Redirect to Telegram
joinBtn.addEventListener("click", () => {
  window.open("https://t.me/+gLv7Oa1LftplZGVl", "_blank");
});

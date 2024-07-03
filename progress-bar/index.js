const progressBar = document.getElementById('progress-bar');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

let interval;
let progress = 0;

function startProgress() {
  interval = setInterval(() => {
    progress += 1;
    progressBar.style.width = `${progress}%`;
    if (progress >= 100) {
      stopProgress();
    }
  }, 150);
}

function stopProgress() {
  clearInterval(interval);
}

function resetProgress() {
  stopProgress();
  progress = 0;
  progressBar.style.width = '0%';
}

startBtn.addEventListener('click', startProgress);
stopBtn.addEventListener('click', stopProgress);
resetBtn.addEventListener('click', resetProgress);
const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const startTimer = () => {
  startTime = Date.now() - elapsedTime;

  // * setInterval() executes a function again and again after a fixed time interval.
  // * setInterval() returns an interval ID.
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timer.textContent = formatTime(elapsedTime);
  }, 10);

  startBtn.disabled = true;
  stopBtn.disabled = false;
};

const formatTime = (elapsedTime) => {
  const ms = Math.floor((elapsedTime % 1000) / 10);
  const s = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const m = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const h = Math.floor(elapsedTime / (1000 * 60 * 60));

  return (
    (h ? (h > 9 ? h : "0" + h) : "00") +
    ":" +
    (m ? (m > 9 ? m : "0" + m) : "00") +
    ":" +
    (s ? (s > 9 ? s : "0" + s) : "00") +
    "." +
    (ms > 9 ? ms : "0" + ms)
  );
};

const stopTimer = () => {
    // * clearInterval() stops an interval created by setInterval().
  clearInterval(timerInterval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
};

const resetTimer = () => {
  clearInterval(timerInterval);

  elapsedTime = 0;
  timer.textContent = "00:00:00";

  startBtn.disabled = false;
  stopBtn.disabled = true;
};

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

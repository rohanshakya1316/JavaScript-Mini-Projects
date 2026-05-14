const timer = document.getElementById("timer")
const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")

let startTime = 0;
let elapsedTime = 0;
let timerInterval; 

const startTimer =() => {
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timer.textContent = formatTime(elapsedTime);
    }, 10)
}

const formatTime = (elapsedTime) => {
    const ms = Math.floor((elapsedTime % 1000) / 10)
    const s = Math.floor((elapsedTime % (1000*60)) / 1000)
    const m = Math.floor((elapsedTime % (1000* 60 * 60)) / 1000)
    const h = Math.floor((elapsedTime % 1000) / 10)
}
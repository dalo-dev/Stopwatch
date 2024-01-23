let count = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;

const timeElement = document.getElementById("time");
const startElement = document.getElementById("start-btn");
const stopElement = document.getElementById("stop-btn");
const resetElement = document.getElementById("reset-btn");

const setCurrentTimer = function () {
  timeElement.innerText = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(
    count
  ).padStart(2, "0")}`;
};

const addSecond = function () {
  count++;
  if (count === 100) {
    count = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  setCurrentTimer();
};

const startCounter = function () {
  if (!intervalId) {
    intervalId = setInterval(addSecond, 10);
  }
};

const stopCounter = function () {
  clearInterval(intervalId);
  intervalId = null;
};

const resetCounter = function () {
  stopCounter();
  count = 0;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;

  setCurrentTimer();
};

startElement.addEventListener("click", startCounter);
stopElement.addEventListener("click", stopCounter);
resetElement.addEventListener("click", resetCounter);

setCurrentTimer();

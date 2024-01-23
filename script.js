let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;

const timeElement = document.getElementById("time");
const startElement = document.getElementById("start-btn");
const stopElement = document.getElementById("stop-btn");

timeElement.innerText = `${String(hours).padStart(2, "0")}:${String(
  minutes
).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(
  milliseconds
).padStart(2, "0")}`;

const addSecond = function () {
  seconds++;
  if (seconds > 59) {
    seconds = 0;
    minutes++;
  }
  if (minutes > 59) {
    minutes = 0;
    hours++;
  }

  timeElement.innerText = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(
    milliseconds
  ).padStart(2, "0")}`;
};

const startCounter = function () {
  if (!intervalId) {
    intervalId = setInterval(addSecond, 1000);
  }
};

const stopCounter = function () {
  clearInterval(intervalId);
  intervalId = null;
};

startElement.addEventListener("click", startCounter);
stopElement.addEventListener("click", stopCounter);

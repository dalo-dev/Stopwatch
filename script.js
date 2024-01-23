let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

const timeElement = document.getElementById("time");
const startElement = document.getElementById("start-btn");

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

  setTimeout(addSecond, 1000);
};

startElement.addEventListener("click", addSecond);

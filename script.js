let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

const timeElement = document.getElementById("time");

timeElement.innerText = `${String(hours).padStart(2, "0")}:${String(
  minutes
).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(
  milliseconds
).padStart(2, "0")}`;

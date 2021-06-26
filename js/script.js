const counterText = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

var counter = 0;

function incrementCounter() {
  counter++;
  counterText.innerHTML = "Counter value: " + counter;
}

function decrementCounter() {
  counter--;
  counterText.innerHTML = "Counter value: " + counter;
}

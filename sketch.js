function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(122, 255, 100);
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI);

}

function getUserInput() {
  // Get the value from the input field
  var userInput = document.getElementById("userInput").value;

  // Do something with the user input (e.g., display it)
  alert("User input: " + userInput);
}

//key press key release val of input do whatever 

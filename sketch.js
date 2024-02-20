// Required Concepts Included: Interactivity, Randomness and Probability, Vector Mathematics

//big ups to p5.js reference, my classmates, and chat gpt 

let userInputFlag = false; // stores whether or not the button was clicked 
let drawing = false; // declaration for 'drawing' variable

function setup() {
  createCanvas(400, 400);
  // drawing initialization
  drawing = false;
}

function draw() {
  background(122, 255, 100);
  print(getUserInput()); 
  var flag = getUserInput(); 
  // is the button clicked? then we should start drawing 
  if (flag) {
    drawing = true;
    console.log(drawing); 
  }

  if (drawing) {
    let userInput = document.getElementById("userInput").value.toLowerCase();
    console.log(userInput); 
    switch (userInput) {
      // ... (rest of the switch cases)
      default: 
        // something to do nothing 
        break;
    }
    // resetting userInput
    userInputFlag = false; 
  }
} 

function getUserInput() {
  var button = document.getElementById("button");
  button.addEventListener('click', function () {
    userInputFlag = true; // when button clicked, flag is true 
  }); 
  return userInputFlag; 
} 

// attempt two
function drawRandomPolygon() {
  let n = parseInt(prompt("Enter the number of sides (between 3 and 100)"));
  if (n >= 3 && n <= 100) {
    // ... (rest of the drawRandomPolygon function)
  } else {
    console.log("Please enter a valid number of sides between 3 and 100");
  }
}

// attempt three mf 
function displayInputElements() {
  // Check if the user input is "draw random polygon"
  if (userInputFlag) { // Use userInputFlag instead of userInput
    // ... (rest of the displayInputElements function)
  }
}

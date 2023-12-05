

//____________________________________________________________________


//big ups to p5.js reference, my classmates, and chat gpt 

let userInputFlag = false; // stores whether or not the button was clicked 

function setup() {
  createCanvas(400, 400);
  drawing = false;
}

//____________________________________________________________________

function draw() {
  background(122, 255, 100);
  
  // is the button clicked? then we should start drawing 
  if (userInputFlag) {
    drawing = true;
  }

  //____________________________________________________________________

  if (drawing) {
    let userInput = document.getElementById("userInput").value.toLowerCase();
    if (switchUserInput("square")) 
    {
      square(30, 20, 55);
    }
    if (switchUserInput("triangle")) 
    {
      triangle(30, 75, 58, 20, 86, 75);
    }
    if (switchUserInput("trapezoid")) 
    {
      //three triangles make a trapezoid since p5 reference doesn't have a trapezoid function 
      triangle(30, 75, 58, 20, 86, 75);
      triangle(58, 20, 86, 75, 108, 20);
      triangle(86, 75, 108, 20, 136, 75);
    }
    if (switchUserInput("circle")) 
    {
      circle(30, 30, 20);
    }
    if (switchUserInput("diamond")) 
    {
      // p5 reference has no diamond so rotating a square 
      square(30, 20, 55);
      rotate(90) 
    }
  }
}
function switchUserInput(String) 
{
  var userInput = document.getElementById("userInput").value;
  if (userInput == String) 
  {
    return userInput; 
  }

}
function getUserInput() 
{
  var button = document.getElementById("button");

  button.addEventListener('click', function () {
    if (userInput == "square") 
    {
      console.log("returning true");
      userInputFlag = true; // Set the flag to true when the button is clicked
    }
    if (userInput == "triangle") 
    {
      console.log("returning true");
      userInputFlag = true; 
    }
    if (userInput == "circle") 
    {
      console.log("returning true");
      userInputFlag = true; 
    }
    if (userInput == "trapezoid") 
    {
      console.log("returning true");
      userInputFlag = true; 
    }
    if (userInput == "diamond") 
    {
      console.log("returning true");
      userInputFlag = true; 
    }
  });
}

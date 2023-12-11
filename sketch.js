//____________________________________________________________________


//big ups to p5.js reference, my classmates, and chat gpt 

let userInputFlag = false; // stores whether or not the button was clicked 

function setup() {
  createCanvas(400, 400);
  drawing = false;
}

//____________________________________________________________________

function draw() 
{
  background(122, 255, 100);
  
  // is the button clicked? then we should start drawing 
  if (userInputFlag) 
  {
    drawing = true;
  }

//____________________________________________________________________

  if (drawing) //if drawing is true! 
  {
    let userInput = document.getElementById("userInput").value.toLowerCase();
    userInput = getUserInput(); 
    switch (userInput) 
    {
      case "square":
        square(30, 20, 55);
        break;

      case "triangle":
        triangle(30, 75, 58, 20, 86, 75);
        break;

      case "trapezoid":
        // three triangles make a trapezoid since p5 reference doesn't have a trapezoid function
        triangle(30, 75, 58, 20, 86, 75);
        triangle(58, 20, 86, 75, 108, 20);
        triangle(86, 75, 108, 20, 136, 75);
        break;

      case "circle":
        circle(30, 30, 20);
        break;

      case "diamond":
        // p5 reference has no diamond so rotating a square
        push();
        translate(60, 50);
        rotate(QUARTER_PI);
        square(0, 0, 55);
        pop();
        break;
      
      case "draw random polygon": 
        drawRandomPolygon(); 
        break; 
      
      default : 
        //something to do nothing 
        break; 

    }
  //resetting userInput
  userInputFlag = false; 
  }
} 
//____________________________________________________________________

function getUserInput() 
{
  var button = document.getElementById("button");

  button.addEventListener('click', function ()
  {
  userInputFlag = true; // when button clicked, flag is true 
  }); 

} 

//____________________________________________________________________

// attempt two
function drawRandomPolygon() 
{
  let n = parseInt(prompt("Enter the number of sides (between 3 and 100)"));
  if (n >= 3 && n <= 100) 
  {
    let centerX = 200;
    let centerY = 200;
    let radius = 150;
    beginShape();
    for (let i = 0; i < n; i++) 
    {
      let angle = TWO_PI * i / n; // Corrected angle calculation
      let x = centerX + (radius * cos(angle));
      let y = centerY + (radius * sin(angle));
      vertex(x, y);
    }
    endShape(CLOSE);
  } 
  else 
  {
    console.log("Please enter a valid number of sides between 3 and 100");
  }
}


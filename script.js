// Create a 16x16 grid of square divs inside a “container” div which can be written in your HTML file using JavaScript
  // Query “container” div and store it to variable gridContainer
  // Initialize counter i and set its value to 0
  // While i is smaller than 16
    // Create div element and store it to variable rowDiv
    // Add "row-div" to rowDiv's classList property
    // Initialize counter j and set its value to 0
    // While j is smaller than 16
      // Create div element and store it to variable innerDiv
      // Append innerDiv to rowDiv
    // Increase j by 1
  // Append rowDiv to gridContainer
  // Increase i by 1

const gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < 16; i++) {
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row-div");

  for (let j = 0; j < 16; j++) {
    const innerDiv = document.createElement("div");
    innerDiv.id = `${i + 1}, ${j + 1}`
    rowDiv.appendChild(innerDiv);
  }

  gridContainer.appendChild(rowDiv);
}

// Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would
// “Hovering” is what happens when your mouse enters (mouseover) a div and ends when your mouse leaves (mouseout) it
  // Set an event listener for mouseover event to gridContainer and register an event handler 
    // that if e.target.id exists and e.target.id doesn't equal to "grid-container"
      // Set an event listener for mouseout event to e.target and register an event handler 
      // that Set backgroundColor of e.target to rgb(0, 0, 0)

gridContainer.addEventListener("mouseover", (e) => {
  // console.log(e.target.id);
  if (e.target.id && e.target.id !== "grid-container") {
    e.target.addEventListener("mouseout", () => {
      e.target.style.backgroundColor = "rgb(0, 0, 0)";
      // console.log("hover")
    });
  }
});

// Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before
// Set the limit for the user input to a maximum of 100
// You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used

// Extra credit
// Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction
// Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions
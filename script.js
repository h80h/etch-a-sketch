function playGame() {
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
  const btn = document.querySelector("button");
  let lastValidInput = 16;

  function createGrid(numOfDivPerSide) {
    for (let i = 0; i < numOfDivPerSide; i++) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row-div");

      for (let j = 0; j < numOfDivPerSide; j++) {
        const innerDiv = document.createElement("div");
        // innerDiv.id = `${i + 1}, ${j + 1}`
        rowDiv.appendChild(innerDiv);
      }

      gridContainer.appendChild(rowDiv);
    }
  }

  createGrid(16);


  // Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would
  // “Hovering” is what happens when your mouse enters (mouseover) a div and ends when your mouse leaves (mouseout) it
    // Set an event listener for mouseover event to gridContainer and register an event handler 
      // Set an event listener for mouseout event to e.target and register an event handler 
      // that Set backgroundColor of e.target to rgb(0, 0, 0)

  gridContainer.addEventListener("mouseover", (e) => {
    // console.log(e.target);
    e.target.addEventListener("mouseout", () => {
      e.target.style.backgroundColor = "rgb(0, 0, 0)";
    });
  });

  // Query the button and store it to variable btn
  // Set an event listener for click event to btn and register an event handler
    // that will send the user a popup asking for the number of squares per side for the new grid.
      // Prompt question: "Decide the number of squares per side for the new grid\n\n(max: 100)", with 16 as default value
      // and Store the value into variable numForNewGrid

    // Set the limit for the user input to a maximum of 100
      // If numForNewGrid is integer AND numForNewGrid is smaller than or equal to 100 AND numForNewGrid is bigger than 0
        // the existing grid should be removed, 
          // Replace child node of gridContainer with no replacement
        // Call createGrid(numForNewGrid)
      // Else 
        // Alert "Your input isn't valid.\nThe input should be a positive integer which isn't bigger than 100."
        // Set numForNewGrid to ""

  
  btn.addEventListener("click", () => {
    const numForNewGrid = prompt(
      "Decide the number of squares per side for the new grid\n\n(max: 100)",
      lastValidInput,
    );

    if (
      Number.isInteger(parseFloat(numForNewGrid)) &&
      numForNewGrid <= 100 &&
      numForNewGrid > 0) {
        gridContainer.replaceChildren();
        createGrid(numForNewGrid);
        lastValidInput = numForNewGrid;
    } else if (numForNewGrid !== null) {
      alert(
        "Your input isn't valid.\nThe input should be a positive integer which isn't bigger than 100.",
      );
    }
  });
}

playGame();

// Extra credit
// Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction
// Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. The goal is to achieve a fully black (or completely colored) square in only ten interactions
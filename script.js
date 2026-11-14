function getRandomInt(num) {
  return Math.floor(Math.random() * (num + 1));
}

function playGame() {
  // Create a 16x16 grid of square divs inside a “container” div which can be written in your HTML file using JavaScript
  // Query “container” div and store it to variable gridContainer
  // Initialize counter i and set its value to 0
  // While i is smaller than 16
  // Create div element and store it to variable rowContainer
  // Add "row-container" to rowContainer's classList property
  // Initialize counter j and set its value to 0
  // While j is smaller than 16
  // Create div element and store it to variable cell
  // Append cell to rowContainer
  // Increase j by 1
  // Append rowContainer to gridContainer
  // Increase i by 1

  const gridContainer = document.querySelector("#grid-container");
  const btn = document.querySelector("button");
  const modeSelector = document.querySelector("#mode");
  let lastValidInput = 16;
  let mode = "default";

  function createGrid(numOfCellPerSide) {
    gridContainer.replaceChildren();
    for (let i = 0; i < numOfCellPerSide; i++) {
      const rowContainer = document.createElement("div");
      rowContainer.classList.add("row-container");

      for (let j = 0; j < numOfCellPerSide; j++) {
        const cell = document.createElement("div");
        rowContainer.appendChild(cell);
      }

      gridContainer.appendChild(rowContainer);
    }
  }

  createGrid(16);

  // Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would
  // “Hovering” is what happens when your mouse enters (mouseover) a div and ends when your mouse leaves (mouseout) it
  // Set an event listener for mouseover event to gridContainer and register an event handler
  // If backgroundColor of e.target isn't existed
  // If mode variable's value is "random color"
  // Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction
  // Call getRandomInt(255) for Red, Green and Blue value of rgb function and Set backgroundColor of e.target to that rgb value
  // Else 
  // Set backgroundColor of e.target to rgb(0 0 0)
  
  // Else if mode variable's value is "grayscale"
  // If opacity of e.target is smaller than 1
  // Add 0.1 to opacity of e.target and Assign the return to opacity of e.target itself
  //

  gridContainer.addEventListener("mouseover", (e) => {
    const cell = e.target;
    if (mode === "random color") {
      if (!cell.style.backgroundColor) {
        cell.style.backgroundColor = `rgb(${getRandomInt(255)} ${getRandomInt(255)} ${getRandomInt(255)})`;      
      }
    } else if (!cell.classList[0]) {
      cell.classList.add("default");
      // console.log("add class");
    }

    if (mode === "grayscale" && cell.style.opacity < 1) {
      cell.style.opacity = String(+cell.style.opacity + 0.1);
      // console.log(cell.style.opacity);
    }
  });

  // Clear grid
  gridContainer.addEventListener("wheel", () => createGrid(lastValidInput));

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
      "Decide the number of cells per side for the new grid (max: 100)\nSelected mode will also be applied to the new grid",
      lastValidInput,
    );

    if (
      Number.isInteger(parseFloat(numForNewGrid)) &&
      numForNewGrid <= 100 &&
      numForNewGrid > 0
    ) {
      createGrid(numForNewGrid);
      lastValidInput = numForNewGrid;
      mode = modeSelector.value;
    } else if (numForNewGrid !== null) {
      alert(
        "Your input isn't valid.\nThe input should be a positive integer which isn't bigger than 100.",
      );
    }
  });
}

playGame();
let allContainer = document.querySelector(".allContainer");
let container = document.querySelector(".container");
let grid = document.querySelector(".grid");
let k;

function createPad(j) {
  for(i = 0; i < j; i++){
    grid.setAttribute("data-count", "0");
    let newGrid = grid.cloneNode(true);
    container.append(newGrid)
  }

  for(i = 0; i < j; i++){
    let newContainer = container.cloneNode(true);
    allContainer.append(newContainer);
  }
}

function getAlpha(rgbaString) {
  // Check if the string is in rgba format
  if (rgbaString.includes('rgba')) {
      // Extract the alpha channel value
      let alpha = rgbaString.match(/rgba\(\s*(\d+),\s*(\d+),\s*(\d+),\s*([\d\.]+)\s*\)/)[4];
      
      return parseFloat(alpha);
  } else {
      return null; // or handle it as needed
  }
}

createPad(15);

allContainer.addEventListener("mouseover", (e) => {
  let lastCount = e.target.getAttribute("data-count");
  let thisCount = Number(lastCount) +1;
  console.log(`thisCount: ${thisCount}`);
  
  e.target.setAttribute("data-count", `${thisCount}`);
  
  let lastAlpha = getAlpha(e.target.style.backgroundColor);
  let thisAlpha;

  if(Number(thisCount) >= 11){
    thisAlpha = 1.0;
  } else {
    thisAlpha = (lastAlpha + 0.1).toFixed(1);
  }

  console.log(`thisAlpha: ${thisAlpha}`)

  let newRGBAString = `rgba(51, 51, 51, ${thisAlpha})`
  e.target.setAttribute("style", `background-color: ${newRGBAString}`);
});



let newPad = document.querySelector(".newPad");
newPad.addEventListener("click", () => {
  k = prompt("how many squares per line?\n\(no larger than 100\)")
  allContainer.replaceChildren();
  container.replaceChildren();
  
  createPad(k);
});



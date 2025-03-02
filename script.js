let allContainer = document.querySelector(".allContainer");
let container = document.querySelector(".container");
let grid = document.querySelector(".grid");

function createPad(j) {
  for(i = 0; i < j; i++){
    grid.setAttribute("data-count", "0");
    let newGrid = grid.cloneNode();
    container.append(newGrid)
  }

  for(i = 0; i < j; i++){
    let newContainer = container.cloneNode(true);
    allContainer.append(newContainer);
  }
}

createPad(15);

allContainer.addEventListener("mouseover", (e) => {
  let lastCount = e.target.getAttribute("data-count");
  let thisCount = Number(lastCount) +1;
  console.log(`thisCount: ${thisCount}`);
  
  e.target.setAttribute("data-count", `${thisCount}`);
  
  let thisAlpha;

  if(Number(thisCount) >= 11){
    thisAlpha = 1.0;
  } else {
    thisAlpha = (thisCount * 0.1).toFixed(1);
  }

  console.log(`thisAlpha: ${thisAlpha}`)

  let newRGBAString = `rgba(51, 51, 51, ${thisAlpha})`
  e.target.setAttribute("style", `background-color: ${newRGBAString}`);
});

let newPad = document.querySelector(".newPad");
newPad.addEventListener("click", () => {
  let k = prompt("how many squares per line?\n\(no larger than 100\)")
  allContainer.replaceChildren();
  container.replaceChildren();
  
  createPad(k);
});



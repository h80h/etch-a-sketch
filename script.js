let allContainer = document.querySelector(".allContainer");
let container = document.querySelector(".container");
let grid = document.querySelector(".grid");
let k;

function createPad(j) {
  for(i = 0; i < j; i++){
    let newGrid = grid.cloneNode(true);
    container.append(newGrid)
  }

  for(i = 0; i < j; i++){
    let newContainer = container.cloneNode(true);
    allContainer.append(newContainer);
  }
}
createPad(15);

allContainer.addEventListener("mouseover", (e) => {
  console.log(e.target);
  e.target.setAttribute("style", "background-color: #333333");
});

let newPad = document.querySelector(".newPad");
newPad.addEventListener("click", () => {
  k = prompt("how many squares per line?\n\(no larger than 100\)")
  allContainer.replaceChildren();
  container.replaceChildren();
  
  createPad(k);
});



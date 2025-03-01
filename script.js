let container = document.querySelector(".container");
let grid = document.querySelector(".grid");
for(i = 0; i < 15; i++){
  let newGrid = grid.cloneNode(true);
  container.append(newGrid)
}

let allContainer = document.querySelector(".allContainer");
for(i = 0; i < 15; i++){
  let newContainer = container.cloneNode(true);
  allContainer.append(newContainer);
}


allContainer.addEventListener("mouseover", (e) => {
  console.log(e.target);
  e.target.setAttribute("style", "background-color: #333333");
})
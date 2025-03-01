let container = document.querySelector(".container");
for(i = 0; i < 16; i++){
  let newDiv = document.createElement("div");
  container.append(newDiv)
}

let allContainer = document.querySelector(".allContainer");
for(i = 0; i < 15; i++){
  let newContainer = container.cloneNode(true);
  allContainer.append(newContainer);
}
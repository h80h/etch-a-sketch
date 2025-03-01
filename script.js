let container = document.querySelector(".container");
for(i = 0; i < 16; i++){
  let newDiv = document.createElement("div");
  container.append(newDiv)
}

let body = document.querySelector("body");
for(i = 0; i < 15; i++){
  let newContainer = container.cloneNode(true);
  body.append(newContainer);
}
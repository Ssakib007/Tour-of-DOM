// create element and set innerText or innerHTML

const newChild = document.createElement("li");
newChild.innerText = "new born footballer here";

// find the parent where you will add the child

const playersList = document.getElementById("player-list");

// append the child to the parent

playersList.appendChild(newChild);

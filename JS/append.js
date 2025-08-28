// console.log("append file connected");

// parent node
const mainContainer = document.getElementById("main-container");
// create child node
const placesSection = document.createElement("section");

// append child section to the parent section
mainContainer.appendChild(placesSection);

// creating elements inside the child section and appending them

// creating an h1 with text and appending it to the section
const h1 = document.createElement("h1");
h1.innerText = "Places I want to visit";
placesSection.appendChild(h1);

/// creating a ul and append it to the child section

const ul = document.createElement("ul");
placesSection.appendChild(ul);
// creating a li with text and and appending it as a child of the ul

const li1 = document.createElement("li");
li1.innerText = "bandorban";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "sundorbon";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "coxs";
ul.appendChild(li3);

// easier to create html

const booksSection = document.createElement("section");

booksSection.innerHTML = `
<h1> Books I need to read</h1>
<ul>
<li>Physics</li>
<li>Chemistry</li>
<li>Math</li>
<li>English</li>
</ul>
`;

mainContainer.appendChild(booksSection);

// console.log(document);
// console.log("hello from outside");

// console.log("Document object Model");

const student = {
  name: "abel",
  id: 121,
  study: function (subject) {
    // console.log("studying subject", subject);
  },
};

const liCollection = document.getElementsByTagName("li");
// console.log(liCollection);
for (const li of liCollection) {
  //   console.log(li.innerText);
}

const allHeadings = document.getElementsByTagName("h1");
for (const heading of allHeadings) {
  //   console.log(heading.innerText);
}

const foodTitleH1 = document.getElementById("food-title");
// console.log(foodTitleH1.innerText);

const bandElement = document.getElementById("band");
// bandElement.innerText = "Jalali Sleeping Band";

const banglaElements = document.getElementsByClassName("bangla");
// console.log(banglaElements);
for (const element of banglaElements) {
  console.log(element.innerText); 
}

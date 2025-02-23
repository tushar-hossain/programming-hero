// Traversing dom - getElementsByTagName
const collections = document.getElementsByTagName("li");

for (const collection of collections) {
  //   console.log(collection.innerHTML);
  //   console.log(collection.innerText);
}

// Traversing dom - getElementByClass VS getElementById

// const fruits = document.getElementById("fruits");

// fruits.innerText = "I like fruits";

// const fruitsItems = document.getElementsByClassName("fruits-items");

// for (const fruitsItem of fruitsItems) {
//   //   console.log(fruitsItem);
//   console.log(fruitsItem.innerText);
// }

// Traversing dom - getElementByQuerySelector, querySelectorAll

// const fruitsItems = document.querySelectorAll(".fruits-items");
// console.log(fruitsItems);
// for (const fruitsItem of fruitsItems) {
//   console.log(fruitsItem.innerText);
// }

// const fruit = document.querySelector("#fruits");
// console.log((fruit.innerText = "New Fruits"));
// fruit.style.color = "red";
// fruit.style.backgroundColor = "yellow";

const element = document.getElementById("element");

const listElement = document.createElement("li");
listElement.innerText = "Katabon";

const listElement2 = document.createElement("li");
listElement2.innerText = "Batabon";

element.append(listElement, listElement2);

element.insertAdjacentElement("afterbegin", listElement);
element.style.backgroundColor = "lightblue";

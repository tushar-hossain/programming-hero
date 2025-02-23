// addEventListener

/**
 * changing the body color with click button
 */

// const makeRed = document.getElementById("make-red");

// makeRed.addEventListener("click", () => {
//   document.body.style.backgroundColor = "red";
// });

// const makeYellow = document.getElementById("make-yellow");
// makeYellow.addEventListener("click", () => {
//   document.body.style.backgroundColor = "yellow";
// });

// const makeGreen = document.getElementById("make-green");
// makeGreen.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });

// const makeBlue = document.getElementById("make-blue");
// makeBlue.addEventListener("click", () => {
//   document.body.style.backgroundColor = "blue";
// });

/**
 * updated heading, press update clicked button
 */

// const headingText = document.getElementById("text");
// const updateHandler = document.getElementById("update-handler");

// updateHandler.addEventListener("click", () => {
//   headingText.innerText = "Updated Heading Title";
// });

// const userName = document.getElementById("user-name");
// const loggedIn = document.getElementById("btn-login");
// loggedIn.addEventListener("click", () => {
//   userName.innerText = "User loggedIn successfully.";
// });

/**
 * user input name and showing the paragraph
 */

// const inputName = document.getElementById("input-name");
// const btnUpdate = document.getElementById("btn-update");

// btnUpdate.addEventListener("click", function () {
//   const updateName = inputName.value;
//   const name = document.getElementById("name");
//   name.innerText = updateName;
//   inputName.value = "";
// });

/**
 * Create a comment box and display comment
 */

// const commentContainer = document.getElementById("comments-container");
// const postButton = document.getElementById("btn-post");
// postButton.addEventListener("click", function () {
//   const commentBox = document.getElementById("comment-box").value;

//   const pElements = document.createElement("p");
//   pElements.innerText = commentBox;
//   pElements.classList.add("paragraph");
//   commentContainer.appendChild(pElements);
//   document.getElementById("comment-box").value = "";
// });

/**
 * Explore more event type and Simple github like delete confirmation button
 */
// const inputBox = document.getElementById("input-box");
// const btnDelete = document.getElementById("btn-delete");

// inputBox.addEventListener("keyup", (e) => {
//   if (e.target.value === "delete") {
//     btnDelete.removeAttribute("disabled", true);
//     btnDelete.addEventListener("click", () => {
//       const info = document.getElementById("info");
//       info.remove();
//       e.target.value = "";
//     });
//   } else {
//     btnDelete.setAttribute("disabled", true);
//   }
// });

/**
 * Event bubble and Stop propagating
 */

// document.getElementById("body").addEventListener("click", () => {
//   console.log("body clicked");
// });

// document.getElementById("section-item").addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("section item click");
// });

// document.getElementById("items-2").addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("list item click");
// });

/**
 * Event delegate and benefit of Event bubble
 */

const items = document.getElementById("items");
const btnAddItem = document.getElementById("btn-add-item");

btnAddItem.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.innerText = "Brand new item added";
  items.appendChild(newItem);
});

items.addEventListener("click", (e) => {
  e.target.parentNode.removeChild(e.target);
});

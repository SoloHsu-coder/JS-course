// //click events

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   console.log("you clicked me");
// });

// const items = document.querySelectorAll("li");

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     // console.log("item", item);
//     //item.style.textDecoration = "line-through";
//     console.log(e.target);
//     //console.log("you clicked", e.target);
//     e.target.style.textDecoration = "line-through";
//   });
// });

const ul = document.querySelector("ul");

const button = document.querySelector("button");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "something new to do";
  // ul.append(li);
  ul.prepend(li);
});

const items = document.querySelectorAll("li");

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     //item.remove();
//     console.log("Event in LI");
//     e.stopPropagation(); //stop event bubbling in parent element
//     e.target.remove();
//   });
// }); // doesn't affect new added element

ul.addEventListener("click", (e) => {
  console.log(e);
  //console.log("Event in UL");target.nodeName
  if (e.target.nodeName === "LI") {
    e.target.remove();
  }
}); // event in child affects in parent elements => event bubbling

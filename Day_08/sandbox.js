// const para = document.querySelector("p"); // output first p
// console.log(para);
// const p = document.querySelector(".error"); // with class name

// const paraTwo = document.querySelector("body > div > p:nth-child(2)");
// console.log(paraTwo);

// const paras = document.querySelectorAll("p");
// console.log(paras); // nodeList အနေနဲ့ထွက်

// paras.forEach((para) => console.log(para)); // nodeList forEach သုံးလို့ရ
// console.log(paras[1]);

// get element by ID
const title = document.getElementById("page-title");
console.log(title);

// get element by className
const errors = document.getElementsByClassName("error"); //className လို့ပြောထားပြီးသားမလို့ dot(.error)မလိုတော့
console.log(errors); // HTML collections အနေနဲ့ထွက်
console.log(errors[1]);
//errors.forEach((error) => console.log(error)); // can't use forEach for HTML collections

//get element by their tag name

// const paras = document.getElementsByTagName("p");
// console.log(paras); //HTML collections အနေနဲ့ထွက်
// console.log(paras[1]);

const p = document.querySelector("p");
console.log(p);

p.innerText += " World and everyone";
console.log(p);

const paras = document.querySelectorAll("p");
console.log(paras);

paras.forEach((para) => {
  //console.log("before", para);
  para.innerText += " Hsu is awesome";
});

const content = document.querySelector(".content");
console.log("before", content);

// content.innerHTML += "<h3>This is the new content </h3>";
// console.log("after", content);

const people = ["Solo", "Wendy", "Riya", "Yee Mon"];
people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});

const paras = document.querySelectorAll("p");
//console.log(paras);
// const classes = list.classList;
// console.log("classes", classes);
// list.classList.remove("error");
// list.classList.add("success");

// innerText => show visible content
// textContent => show all content even some content may be hidden like display:none;

paras.forEach((para) => {
  if (para.innerText.includes("success")) {
    para.classList.add("success");
  }
  if (para.textContent.includes("error")) {
    para.classList.add("error");
  }
});

// const title = document.querySelector(".title");
// title.classList.toggle("test"); // add the class test if it doesn't exitst
//title.classList.toggle("test"); //remove the class test

const article = document.querySelector("article");
console.log(article.children);
console.log(Array.from(article.children));

const title = document.querySelector("h2");
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

//chaining
console.log(title.nextElementSibling.parentElement.children);

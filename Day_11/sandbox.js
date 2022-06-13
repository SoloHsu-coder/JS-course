const copied = document.querySelector(".copy-me");

copied.addEventListener("copy", (e) => {
  //console.log(e);
  console.log("Oh! my content is copyright!");
});

const box = document.querySelector(".box");
box.addEventListener("mousemove", (e) => {
  //console.log(e);
  box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY} `;
});

document.addEventListener("wheel", (e) => {
  //console.log(e);
  console.log(e.pageX, e.pageY);
});

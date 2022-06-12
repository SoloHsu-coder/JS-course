const link = document.querySelector("a");
console.log(link.getAttribute("href"));

link.setAttribute("href", "http://www.thenetninja.co.uk");
console.log(link);
link.innerText = "The Net Ninja website";

const msg = document.querySelector("p");
console.log("msg", msg);
console.log("before", msg.getAttribute("class"));
msg.setAttribute("class", "success");
console.log("after", msg.getAttribute("class"));
msg.setAttribute("style", "color:purple");

const title = document.querySelector("h1");
console.log("title", title.style);
console.log(title.style.color);
//title.setAttribute("style", "margin:50px"); //overwrite existing style
title.style.margin = "50px"; //add to existing style
title.style.color = "aqua";
console.log(title.style.color);
title.style.margin = ""; //remove margin
console.log(title.style.margin);

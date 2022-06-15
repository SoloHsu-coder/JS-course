const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
//const username = document.querySelector("#username");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log(username.value);
  //console.log(form.username.value);

  //validation

  const username = form.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;

  if (usernamePattern.test(username)) {
    feedback.textContent = "Username is valid!";
    feedback.style.color = "green";
  } else {
    feedback.textContent =
      "Username must contain only letters and between 6 to 12 chars";
    feedback.style.color = "red";
  }
});

//live feedback
const usernamePattern = /^[a-zA-Z]{6,12}$/;
form.username.addEventListener("keyup", (e) => {
  //console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute("class", "success");
    console.log("pass");
  } else {
    form.username.setAttribute("class", "error");
    console.log("fail");
  }
});

//testing RegEx

const username = "solohsu";
const pattern = /^[a-z]{6,}$/; // ^ start with $ end with a-z, at least 6 chars

//let result = pattern.test(username); //return boolean if match pattern
let result = username.search(pattern); // return matched index, if no match return -1
//console.log(result);

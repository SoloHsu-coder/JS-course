//for loops

for (let i = 0; i < 5; i++) {
  console.log("in loop:", i);
}

console.log("loop finished");

const names = ["Solo", "Hsu", "Myat", "Mon"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//while loop

let i = 0;
// while (i < 5) {
//   console.log("in while loop", i);
//   i++;
// }

while (i < 4) {
  console.log(names[i]);
  i++;
}

//do while loop
let j = 0;
do {
  console.log("do while", j);
  j++;
} while (j < 5);

//if statements & logical operators

const password = "pass@123";

if (password.length >= 12 && password.includes("@")) {
  console.log("Your password is strong");
} else if (
  password.length >= 8 ||
  (password.includes("@") && password.length >= 5)
) {
  console.log("Your password is good enough");
} else {
  console.log("Passwords must be less than 8 chars long");
}

// logical NOT !

let user = false;
if (!user) {
  console.log("you must be logged in to continue");
}

console.log(!true);
console.log(!false);

//break & continue

let score = [50, 25, 30, 0, 100, 20, 10];

for (let i = 0; i < score.length; i++) {
  if (score[i] === 0) continue;

  console.log("Your score is", score[i]);

  if (score[i] === 100) {
    console.log("Congrats, you've got the top score");
    break;
  }
}

//switch statements -> needs to be the same type

const grade = "D";

switch (grade) {
  case "A":
    console.log("Your grade - A!");
    break;
  case "B":
    console.log("Your grade - B!");
    break;
  case "C":
    console.log("Your grade - C!");
    break;
  case "D":
    console.log("Your grade - D!");
    break;
  case "E":
    console.log("Your grade - E!");
    break;
  default:
    console.log("Not a valid grade");
}
//using if statements

// if (grade === "A") {
// } else if (grade === "B") {
// } else if (grade === "C") {
// } else if (grade === "D") {
// } else if (grade === "E") {
// }else{}

// variables and block scope

const age = 30; //global scope
if (true) {
  const age = 30; //local scope, can redeclare with the same name as global
  const name = "Hsu";
  console.log("Inside 1st code block", age, name);

  if (true) {
    const age = 20;
    console.log("2nd code block", age, name);
  }
}

console.log("Outside code block", age, name);

/* Function */
//function expression
const speak = function (name = "Hsu", time = "Night") {
  console.log(`Good ${time} ${name}`);
};

speak();
speak("Solo", "Morning");
speak("Solo");

greet();
greet();
greet();

//function declaration
function greet() {
  console.log("Hello there");
}

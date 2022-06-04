const title = "Best read of 2019";
const author = "Mario";
const likes = 30;

let result =
  "The blog called " + title + " by " + author + " has " + likes + " likes";
console.log(result);

//template String

let str = `The blog called ${title} by ${author} has ${likes} likes.`;
console.log(str);

//html template

// let html = `
// <h3>${title}</h3>
// <p>${author}</p>
// <span>This blog has ${likes}</span>`;

// console.log(html);

let names = ["Solo", "Hsu", "Myat"];
//console.log(names);
names[2] = "Mon";
console.log(names);
console.log(names.length);

let random = ["Solo", "Hsu", 22, 23, 24];
console.log(random);

//array methods

let res = names.join("_");
console.log("join name", res);

let nameIndex = names.indexOf("Hsu");
console.log(nameIndex);

let nameConcat = names.concat(["Helen", "Suzan"]);
console.log(nameConcat);

let newName = names.push("Hsu Hsu"); // return new array length including "Hsu Hsu"
console.log(newName);

result = names.pop(); // pop out and remove the last item from array then return that item
console.log(result);
console.log(names);

let num;
console.log(num, num + 3, `The number is ${num}`);

let a = null;
console.log(a, a + 3, `The a is ${a}`);

let email = "solohsu321@gmail.com";
result = email.includes("u");
console.log(result);

result = names.includes("solo");
console.log(result);

//loose comparison (different types can be equal)
let age = 25;

console.log("age", age == 25);
console.log(age == "25");
console.log(age != 25);
console.log(age < 25);
console.log(age > 25);
console.log(age <= 25);

let b = "solo";
console.log(b == "solo");
console.log(b == "Solo");
console.log(b > "Hsu");
console.log(b > "su");

//strict comparison (different types can't be equal)
console.log(age === 25);
console.log(age === "25");
console.log(age !== 25);
console.log(age !== "25");

//type conversion

let score = "100";

console.log("score", score + 1);
score = Number(score);

console.log("score Num", score + 1);

console.log(typeof score);

let c = Number("hello");
console.log(c);

let d = String(50);
console.log(d);
console.log(typeof d);

let e = Boolean(100);
//e = Boolean(0);
//e = Boolean("0");
e = Boolean("");
console.log(e, typeof e);

//object literals

let user = {
  name: "solo",
  age: 23,
  email: "solohsu321@gmail.com",
  location: "Taunggyi",
  blogs: [
    { title: "You and I", likes: 30 },
    { title: "I and You", likes: 35 },
  ],
  login() {
    console.log("User logged in");
  }, // can ommit function keyword, regular function
  logout: function () {
    console.log("User logged out");
  },
  logBlog: function () {
    console.log(this);
    console.log(`${this.name} writes these blogs:`);

    this.blogs.forEach((blog) => console.log(blog.title, blog.likes));
  }, // not use arrow function , bcoz with => function this keywords refer to the window object not user obj
};

// console.log(user);
// console.log(user.email);

// user.age = 24;
// console.log(user.age);

// console.log(user["location"]);
// user["name"] = "hsu";
// console.log(user["name"]);
// console.log(typeof user);

user.login();
user.logout();
user.logBlog();
console.log(this);

//Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.1;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//random numbers

const random = Math.random();
console.log("random num", Math.round(random * 10));

// primitive vs reference types

/* primitive types => stored on stack
reference types (obj,function,array) => heap

primitive => take one place for one var, if change value not affect the copy one.
reference => copy var will take the same pointer address pointed to the same var. Changes will affect both vars. 
*/

// primitive values
let scoreOne = 100;
let scoreTwo = scoreOne;

console.log(`Score1:${scoreOne}`, `Score2:${scoreTwo}`);

scoreOne = 50;
console.log(`Score1:${scoreOne}`, `Score2:${scoreTwo}`);

//reference values

const userOne = { name: "Solo", age: 23 };
const userTwo = userOne;

console.log("before", userOne.name, userTwo.name);

userOne.name = "Hsu";
console.log("after", userOne.name, userTwo.name);

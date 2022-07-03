//store data in local storage

// localStorage.setItem("name", "Solo");
// localStorage.setItem("age", 23);

//get data from local storage

let name = localStorage.getItem("name");
let age = localStorage.getItem("age");

// console.log(name, age);

// updating data

// localStorage.setItem("name", "Hsu"); // find name if it exist replace , if it doesn't create
// localStorage.setItem("age", 24);

// name = localStorage.getItem("name");
// age = localStorage.getItem("age");

console.log(name, age);

//delete data from local storage

//localStorage.removeItem('name'); //delete single item
localStorage.clear(); // delete all
name = localStorage.getItem("name");
age = localStorage.getItem("age");
console.log(name, age);

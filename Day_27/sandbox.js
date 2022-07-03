// const userOne = {
//   username: "Solo",
//   email: "solo@gmail.com",
//   login() {
//     console.log("The user logged in");
//   },
//   logout() {
//     console.log("The user logged out");
//   },
// };

// console.log(userOne.username, userOne.email);
// userOne.login();

// const userTwo = {
//   username: "hsu",
//   email: "hsu@gmail.com",
//   login() {
//     console.log("The user logged in");
//   },
//   logout() {
//     console.log("The user logged out");
//   },
// };

// console.log(userTwo.username, userTwo.email);
// userTwo.login();

// //const userThree = new User("myat", "myat@gmail.com");

// classes

// class User {
//   constructor(username, email) {
//     this.username = username;
//     this.email = email;
//     this.score = 0;
//   }
//   login() {
//     console.log(`${this.username} just logged in`);
//     return this;
//   }
//   logout() {
//     console.log(`${this.username} just logged out`);
//     return this;
//   }
//   incScore() {
//     this.score += 1;
//     console.log(`${this.username} has a score of ${this.score}`);
//     return this;
//   }
// }

// class Admin extends User {
//   constructor(username, email, title) {
//     super(username, email);
//     this.title = title;
//   }
//   deleteUser(user) {
//     users = users.filter((u) => {
//       return u.username !== user.username;
//     });
//   }
// }

//constructor functions

function User(username, email) {
  this.username = username;
  this.email = email;
  //   this.login = function () {
  //     console.log(`${this.username} has logged in`);
  //   };
}
User.prototype.login = function () {
  console.log(`${this.username} has logged in`);
  return this;
};
User.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
  return this;
};
const userOne = new User("solo", "solo@gmail.com"); //instance of User class
const userTwo = new User("hsu", "hus@gmail.com");
//const userThree = new Admin("myat", "myat@gmail.com");
console.log(userOne, userTwo);
userOne.login().logout();
// let users = [userOne, userTwo, userThree];

// console.log(users);

// userThree.deleteUser(userTwo);
// console.log("after delete", users);
// the 'new' keyword
// 1 - it creates a new empty object {}
// 2- it binds the balue of 'this' to the new empty object
// 3- it calls the constructor function to 'build' the object

// instance => individual obj created using classes

//userOne.login().incScore().incScore().logout();

// method chaining works only when there is return value

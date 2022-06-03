//Strings
console.log("hello, world");

let email = "solohsuu321@gmail.com";
console.log(email);

//String Concatenate

let firstName = "Solo";
let lastName = "Hsu";

let fullName = firstName + " " + lastName;
console.log(fullName);

//getting Characters
console.log(fullName[3]);

//string length
console.log(fullName.length);

//string method

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

let result = email.indexOf("@");
console.log(result);

result = email.lastIndexOf("u");
console.log("lastIndexOf u", result);

result = email.slice(2, 5); // take index 2 to 4
console.log("slice result", result);

result = email.substr(4, 10); // start from index 4 and take 10 chars
console.log("substring", result);

result = email.replace("u", "m");
console.log("replace", result);

/* Numbers */

const pi = 3.14;
let radius = 10;

console.log(pi * radius);

let total = pi * radius ** 2;
console.log(total);

total = radius % 3;
console.log(total);

total = 5 * (10 - 3) ** 2;
console.log(total);

let likes = 10;
likes += 10;
console.log(likes);

likes -= 10;
console.log(likes);

likes++;
console.log(likes);

likes--;
console.log(likes);

likes *= 2;
console.log(likes);

let str = "The post has " + likes + " " + "likes";
console.log(str);

console.log(5 / "Hello"); //NaN not a number
console.log(5 * "hello");

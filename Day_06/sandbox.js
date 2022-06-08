//regular function
// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };

//arrow function

// const calcArea = (radius) => 3.14 * radius ** 2;
// const area = calcArea(6);

// console.log(area);

const greet = () => "hello, world";

const res = greet();
console.log(res);

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

const result = bill([1, 2, 3, 4, 5], 500);
console.log(result);

//methods

const name = "solohsu";
let names = name.toUpperCase();
console.log(names);

//callbacks & foreach

const ul = document.querySelector(".people");

let people = ["solo", "wendy", "riya", "yee mon"];

// const logPerson = (person, index) => {
//   console.log(`${index} - ${person}`);
// };

// people.forEach(logPerson);

let html = ``;

people.forEach((person) => (html += `<li style="color:purple">${person}</li>`));

console.log(html);
ul.innerHTML = html;

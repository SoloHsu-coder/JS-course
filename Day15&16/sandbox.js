let scores = [10, 20, 25, 35, 30, 40, 55];

const filteredScored = scores.filter((score) => {
  return score > 20;
});
// filter doesn't change the original array, it returns new array
//console.log(filteredScored);

const users = [
  { name: "solo", premium: true },
  { name: "hsu", premium: false },
  { name: "wendy", premium: true },
  { name: "riya", premium: false },
];

const premiumUser = users.filter((user) => {
  return user.premium;
});
//console.log(premiumUser);

// map method
const mark = scores.map((score) => {
  return score / 2;
});
//console.log(mark);

const user = users.map((person) => {
  if (person.premium) {
    return { name: "solohsu", premium: person.premium };
  } else {
    return null;
  }
});

//console.log(user);
//console.log(users);

// reduce method

const score = [50, 60, 70, 80, 90, 60, 20, 10];

const res = score.reduce((acc, curr) => {
  if (curr > 50) {
    acc++;
  }
  return acc;
}, 0); // initialize accumulator with 0;
//console.log(res); //return single value based on accumulator

const allScore = [
  { player: "solo", score: 50 },
  { player: "hsu", score: 60 },
  { player: "wendy", score: 70 },
  { player: "solo", score: 80 },
];

const soloScore = allScore.reduce((acc, curr) => {
  if (curr.player === "solo") {
    acc += curr.score;
  }
  return acc;
}, 0);
//console.log(soloScore);

//find method

const marks = [10, 20, 30, 5, 50, 60, 90];

const firstHighMark = marks.find((mark) => {
  return mark > 50;
}); // return the first one that met the condition and break

//console.log(firstHighMark);

// example 1 - sorting strings

const names = ["solo", "riya", "wendy", "hsu"];
//names.sort(); // update the original array , asce order
names.reverse(); // from the last to first, reverse order
console.log(names);

// exapmle 2 - sorting numbers

marks.sort();
console.log(marks); // 5 is not the first number, it only looks first digit and sort 1,2,3,4...

const players = [
  { player: "solo", score: 50 },
  { player: "hsu", score: 60 },
  { player: "wendy", score: 70 },
  { player: "solo", score: 80 },
];

// players.sort((a, b) => {
//   if (a.score > b.score) {
//     return -1; // a will come first
//   } else if (b.score > a.score) {
//     return 1; //b will come first
//   } else {
//     return 0;
//   }
// });

players.sort((a, b) => a.score - b.score); // b > return +ve and b will come first, otherwise -ve and a will come first
console.log(players); // a-b ဆို asce order နဲ့ရ

// Chaining array method
const products = [
  { name: "gold star", price: 30 },
  { name: "green shell", price: 20 },
  { name: "gold shell", price: 40 },
  { name: "gold ring", price: 50 },
  { name: "mushroom", price: 50 },
];

// const filtered = products.filter((product) => product.price > 20);

// const promo = filtered.map((pro) => {
//   return `${pro.name} is ${pro.price} pounds`;
// });
// console.log(promo);

const filtered = products
  .filter((product) => product.price > 20)
  .map((product) => `${product.name} is ${product.price} pounds`);
console.log(filtered);

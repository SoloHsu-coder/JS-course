const now = new Date();
console.log(now);
console.log(typeof now);

//year, months, day, times

console.log("getFullYear:", now.getFullYear());
console.log("getMonth:", now.getMonth()); // return int, jan starts at 0;
console.log("getDAte:", now.getDate());
console.log("getDay:", now.getDay()); // return int, sunday starts at 0
console.log("getHours:", now.getHours());
console.log("getMinutes:", now.getMinutes());
console.log("getSeconds:", now.getSeconds());

//date Strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

//timestamps
//console.log("timestamp:", now.getTime());

const before = new Date("February 1 2021 4:03:59");
const current = new Date();

const diff = current.getTime() - before.getTime();
console.log(diff);
const days = Math.round(diff / 1000 / 3600 / 24);

console.log(`The post was written ${days} days ago`);

//converting timestamps into Date objects

const timestamp = 6737483934767;
console.log(new Date(timestamp));

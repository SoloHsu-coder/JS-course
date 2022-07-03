const todos = [
  { text: "buy milk", person: "solo", price: 30 },
  { text: "buy book", person: "solo", price: 50 },
  { text: "buy guitar", person: "solo", price: 70 },
];

localStorage.setItem("todos", JSON.stringify(todos)); // turn array into valid json string to store in localStorage
const storedTodos = localStorage.getItem("todos");
console.log(JSON.parse(storedTodos)); // turn JSON string into array

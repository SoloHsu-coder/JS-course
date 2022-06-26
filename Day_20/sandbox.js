// console.log(1);
// console.log(1);
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 2000);
// console.log(1);

const request = new XMLHttpRequest();
request.addEventListener("readystatechange", () => {
  //console.log(request, request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.response);
  } else if (request.readyState === 4) {
    console.log("could not fetch the data");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();

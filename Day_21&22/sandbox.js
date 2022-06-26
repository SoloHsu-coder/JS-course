const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      //console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.response);
        resolve(data);
        //callback(undefined, data);
      } else if (request.readyState === 4) {
        //callback("could not fetch", undefined);
        reject("error getting resource");
      }
    });

    //   request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    request.open("GET", resource);
    request.send();
  });
};

// console.log(1);
// console.log(4);
// getTodos("todos/hsu.json", (err, data) => {
//   //   console.log("callback fired");
//   //   if (err) {
//   //     console.log(err);
//   //   } else {
//   //     console.log(err);
//   //     console.log(data);
//   //   }
//   console.log(data);
//   getTodos("todos/mon.json", (err, data) => {
//     console.log(data);
//     getTodos("todos/solo.json", (err, data) => {
//       console.log(data);
//     });
//   }); //callback hell, callback nesting, very hard to maintain
// }); // non blocking code, start now and can finish later, async
// console.log(3);
// console.log(2);

//promise example

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     //fetch sth
//     resolve("some data");
//     //reject('some error')
//   });
// };

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// getTodos("todos/hsu.json")
//   .then((data) => {
//     console.log("promise resolved:", data);
//   })
//   .catch((error) => {
//     console.log("promise rejected:", error);
//   });

getTodos("todos/solo.json")
  .then((data) => {
    console.log("promise 1 resolved", data);
    return getTodos("todos/mon.json");
  })
  .then((data) => {
    //console.log("promise 2 resolved", data);
    return getTodos("todos/hsu.json");
  })
  .then((data) => {
    //console.log("promise 3 resolved", data);
  })
  .catch((error) => {
    //console.log("promise rejected", error);
  });

//fetch api
fetch("todos/solo.json")
  .then((response) => {
    //console.log("resolved", response);
    return response.json();
  })
  .then((data) => {
    //console.log(data);
  })
  .catch((error) => {
    //console.log("rejected", error);
  });

//async & await

const getTodo = async () => {
  const response = await fetch("todos/mon.json");
  if (response.status !== 200) {
    throw new Error("cannot fetch the data"); //create own error message with throw new obj
  }
  const data = await response.json();

  return data;
};

getTodo()
  .then((data) => console.log("resolved", data))
  .catch((err) => console.log("rejected", err.message)); // can't get data directly,cuz async() return a promise and it's nonblocking

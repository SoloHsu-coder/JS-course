const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //check answers

  userAnswers.forEach((ans, index) => {
    if (ans === correctAnswers[index]) {
      score += 25;
    }
  });
  scrollTo(0, 0);

  result.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;

    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

// window object (global object)

// console.log(document.querySelector("form"));
// window.console.log(document.querySelector("form"));
// alert("hello");
// window.alert("hello");

// setTimeout(() => {
//   alert("hello world");
// }, 3000); // after 3 sec alert hello world
// let i = 0;
// const timer = setInterval(() => {
//   alert("hello world");
//   i++;
//   if (i === 5) {
//     clearInterval(timer);
//   }
// }, 2000); // alert hello world every two second

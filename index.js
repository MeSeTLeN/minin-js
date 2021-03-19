console.log("Start");

console.log("Start 2");

function timeout2sec() {
  console.log("timeout2sec");
}

window.setTimeout(() => {
  console.log("Inside timeout, after 2 sec");
}, 2000);

setTimeout(timeout2sec, 1000);

console.log("End");

setTimeout(() => {
  console.log("Queue cause async");
}, 0);

// google loupe js

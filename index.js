function hello() {
  console.log("Hello", this);
}

const person = {
  name: "Maksym",
  age: 24,
  sayHello: hello,
  sayHelloWindowShort: hello.bind(this),
  sayHelloWindow: hello.bind(window),
  sayHelloWindowDocument: hello.bind(document),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};

const lena = {
  name: "Elena",
  age: 23,
};

// const fnLenaInfoLog = person.logInfo.bind(lena);
// fnLenaInfoLog("Frontend", "+380-99-99-99-999");
// person.logInfo.call(lena, "Frontend", "+380-99-99-99-999");
// person.logInfo.apply(lena, ["Frontend", "+380-99-99-99-999"]);

const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//   return arr.map(function (i) {
//     return i * n;
//   });
// }

Array.prototype.multBy = function (n) {
  return this.map(function (i) {
    return i * n;
  });
};

console.log(array.multBy(20));

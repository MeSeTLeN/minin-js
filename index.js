function hello() {
  console.log("Hello", this);
}

const person = {
  name: "Maksym",
  age: 24,
  sayHello: hello,
};

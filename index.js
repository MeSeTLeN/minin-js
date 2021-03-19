// function createCalcFunc(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }

// const calc = createCalcFunc(42);
// calc();

function createIncrementor(n) {
  return function (num) {
    return n + num;
  };
}

const addOne = createIncrementor(1);
const addTen = createIncrementor(10);

console.log(addOne(10));
console.log(addOne(41));

console.log(addTen(10));
console.log(addTen(41));

function createCalcFunc(n) {
  return function () {
    console.log(1000 * n);
  };
}

const calc = createCalcFunc(42);
calc();

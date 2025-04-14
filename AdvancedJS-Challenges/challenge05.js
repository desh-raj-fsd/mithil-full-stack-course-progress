// Create a generator function numberGenerator() that yields numbers from 1 to 3.

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

//Create a custom iterator called rangeIterator(start, end) that returns an object that iterates over numbers from start to end.
// Each call to .next() should return the next number in the range until it reaches end.

function rangeIterator(start, end) {
  return {
    current: start,
    last: end,

    next() {
      if (this.current <= this.last) {
        return { value: this.current++, done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}


// Create a generator function fibonacciGenerator() that yields numbers from the Fibonacci sequence indefinitely (1, 1, 2, 3, 5, 8, etc.).
// Use the next() method to get the next Fibonacci number.

function* fibonacciGenerator() {
  let a = 1,
    b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

//Higher Order Functions and Arrow Functions

const squareNumbers = (arr) => arr.map((num) => num * num);

const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

const sumPositiveNumbers = (arr) =>
  arr.filter((num) => num > 0).reduce((sum, num) => sum + num, 0);

const getNames = (arr) => arr.map((obj) => obj.name);

const findLongestWord = (arr) =>
  arr.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ""
  );

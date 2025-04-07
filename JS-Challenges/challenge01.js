//Playing with types

function stringToNumber(input) {
  const num = Number(input);
  if (isNaN(num)) {
    return "Not a number";
  }
  return num;
}

function flipBoolean(input) {
  return !Boolean(input);
}

function whatAmI(input) {
  return `I'm a ${typeof input}!`;
}

function isItTruthy(input) {
  return input ? "It's truthy!" : "It's falsey!";
}

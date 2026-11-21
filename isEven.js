// modules/isEven.js
// Custom module that checks whether a number is even.
// Demonstrates: creating a reusable module and exporting it with module.exports

function isEven(number) {
  if (typeof number !== "number" || isNaN(number)) {
    throw new Error("isEven() expects a valid number");
  }
  return number % 2 === 0;
}

module.exports = isEven;

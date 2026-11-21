// calculator.js
// CLI-Based Calculator using process.argv
// Usage: node calculator.js <operation> <num1> <num2>
// Example: node calculator.js add 10 5

// process.argv[0] -> path to node
// process.argv[1] -> path to this script
// process.argv[2] -> operation
// process.argv[3], process.argv[4] -> operands

const args = process.argv.slice(2);
const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

console.log("----- Smart CLI Calculator -----");

// Graceful handling of invalid/missing input
if (!operation || isNaN(num1) || isNaN(num2)) {
  console.log("Invalid input!");
  console.log("Usage: node calculator.js <operation> <num1> <num2>");
  console.log("Operations supported: add, subtract, multiply, divide");
  process.exit(1);
}

let result;

switch (operation) {
  case "add":
    result = add(num1, num2);
    break;
  case "subtract":
    result = subtract(num1, num2);
    break;
  case "multiply": // bonus: extra operation beyond the minimum requirement
    result = multiply(num1, num2);
    break;
  case "divide": // bonus: extra operation beyond the minimum requirement
    try {
      result = divide(num1, num2);
    } catch (err) {
      console.log("Error:", err.message);
      process.exit(1);
    }
    break;
  default:
    console.log(`Invalid operation: "${operation}"`);
    console.log("Operations supported: add, subtract, multiply, divide");
    process.exit(1);
}

console.log(`Operation : ${operation}`);
console.log(`Numbers   : ${num1} and ${num2}`);
console.log(`Result    : ${result}`);

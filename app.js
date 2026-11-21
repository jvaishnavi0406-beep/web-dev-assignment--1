// app.js
// Demonstrates reusability of the custom modules (isEven + logger)
// Run: node app.js

const isEven = require("./modules/isEven");
const { log, logError } = require("./modules/logger");

log("Starting module reusability demo...");

const numbers = [2, 5, 8, 11, 14, 17, 20];

numbers.forEach((num) => {
  if (isEven(num)) {
    log(`${num} is Even`);
  } else {
    log(`${num} is Odd`);
  }
});

// Demonstrate graceful error handling using the same module
try {
  isEven("not-a-number");
} catch (err) {
  logError(err.message);
}

log("Demo finished.");

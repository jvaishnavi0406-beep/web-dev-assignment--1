// dice.js
// Random Dice Generator using the crypto core module
// Run: node dice.js [numberOfRolls]
// Example: node dice.js 5

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { log } = require("./modules/logger");

// ANSI escape codes for colored terminal output (bonus)
const GREEN = "\x1b[32m";
const RESET = "\x1b[0m";

const historyFile = path.join(__dirname, "dice-history.txt");

function rollDice() {
  // crypto.randomInt(min, maxExclusive) -> cryptographically secure random integer
  return crypto.randomInt(1, 7); // gives 1-6 inclusive
}

function rollMultipleDice(times) {
  log(`Rolling dice ${times} time(s)...`);
  const history = [];

  for (let i = 1; i <= times; i++) {
    const value = rollDice();
    console.log(`${GREEN}Roll ${i}: Dice Rolled: ${value}${RESET}`);
    history.push(value);
  }

  return history;
}

const numberOfRolls = parseInt(process.argv[2]) || 5;
const results = rollMultipleDice(numberOfRolls);

console.log("----------------------------");
console.log("Dice Roll History:", results.join(", "));

// Bonus: persist roll history to a text file
const entry = `[${new Date().toISOString()}] ${results.join(", ")}\n`;
fs.appendFile(historyFile, entry, (err) => {
  if (err) {
    console.log("Could not save history:", err.message);
    return;
  }
  log("Roll history saved to dice-history.txt");
});

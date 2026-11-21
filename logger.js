// modules/logger.js
// Custom logger module with timestamped console logs.
// Demonstrates: reusable module exporting multiple functions

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

function logError(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ERROR: ${message}`);
}

module.exports = { log, logError };

// fileManager.js
// File Manager using the fs core module (Create, Read, Update, Delete)
// Run: node fileManager.js
// Watch the terminal to observe the asynchronous execution order.

const fs = require("fs");
const path = require("path");
const { log, logError } = require("./modules/logger");

const filePath = path.join(__dirname, "test.txt");

function createFile() {
  log("Creating File...");
  fs.writeFile(filePath, "Hello Node.js", (err) => {
    if (err) {
      logError(`Failed to create file: ${err.message}`);
      return;
    }
    log("File Created");
    readFile();
  });
}

function readFile() {
  log("Reading File");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      // Gracefully handle a missing file
      logError(`Failed to read file: ${err.message}`);
      return;
    }
    console.log(data);
    updateFile();
  });
}

function updateFile() {
  fs.appendFile(filePath, "\nLearning FS Module", (err) => {
    if (err) {
      logError(`Failed to update file: ${err.message}`);
      return;
    }
    log("File Updated");

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        logError(`Failed to read updated file: ${err.message}`);
        return;
      }
      console.log(data);
      deleteFile();
    });
  });
}

function deleteFile() {
  fs.unlink(filePath, (err) => {
    if (err) {
      logError(`Failed to delete file: ${err.message}`);
      return;
    }
    log("File Deleted");
  });
}

// Run the full CRUD cycle: create -> read -> update -> read -> delete
createFile();

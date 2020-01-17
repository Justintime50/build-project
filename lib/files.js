const fs = require("fs");
const path = require("path");

// Scan the current directory for a README that already exists
module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  }
};

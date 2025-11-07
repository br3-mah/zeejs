// File handling utilities
const fs = require("fs");
const path = require("path");

function createFiles(basePath, structure) {
  Object.entries(structure).forEach(([key, value]) => {
    const fullPath = path.join(basePath, key);
    if (typeof value === "string") {
      try {
        fs.writeFileSync(fullPath, value);
        console.log(`✅ Created file: ${fullPath}`);
      } catch (err) {
        console.error(`❌ Error creating file: ${fullPath}, ${err.message}`);
      }
    } else {
      fs.mkdirSync(fullPath, { recursive: true });
      createFiles(fullPath, value);
    }
  });
}

module.exports = { createFiles };

// Detects package manager

const fs = require("fs");

function detectPackageManager() {
  if (fs.existsSync("yarn.lock")) return "yarn";
  if (fs.existsSync("pnpm-lock.yaml")) return "pnpm";
  return "npm";
}

module.exports = { detectPackageManager };

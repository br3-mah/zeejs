// Handles package installation
const { execSync } = require("child_process");
const { detectPackageManager } = require("../utils/detectPM");

function installPackage(packageName) {
  if (!packageName) {
    console.error("❌ Error: Please provide a package name.");
    console.log("Usage: zee install <package-name>");
    process.exit(1);
  }

  const packageManager = detectPackageManager();
  console.log(`📦 Installing ${packageName} using ${packageManager}...`);

  try {
    execSync(`${packageManager} install ${packageName}`, { stdio: "inherit" });
    console.log(`✅ Package ${packageName} installed successfully!`);
  } catch (error) {
    console.error(`❌ Failed to install ${packageName}:`, error.message);
  }
}

module.exports = { installPackage };

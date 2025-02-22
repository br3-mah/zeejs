#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Import project structure
const projectStructure = require("./struct");

function createFiles(basePath, structure) {
  Object.entries(structure).forEach(([key, value]) => {
    const fullPath = path.join(basePath, key);
    if (typeof value === "string") {
      fs.writeFileSync(fullPath, value);
      console.log(`✅ Created file: ${fullPath}`);
    } else {
      fs.mkdirSync(fullPath, { recursive: true });
      createFiles(fullPath, value);
    }
  });
}

function detectPackageManager() {
  if (fs.existsSync("yarn.lock")) return "yarn";
  if (fs.existsSync("pnpm-lock.yaml")) return "pnpm";
  return "npm";
}

const args = process.argv.slice(2);

if (args[0] === "create") {
  const projectName = args[1] || "zee_project";
  const projectPath = path.join(process.cwd(), projectName);

  if (fs.existsSync(projectPath)) {
    console.error("❌ Error: Project already exists!");
    process.exit(1);
  }

  fs.mkdirSync(projectPath, { recursive: true });
  createFiles(projectPath, projectStructure);

  console.log(`\n🎉 Project "${projectName}" created successfully!`);
  console.log(`📂 Navigate to your project: cd ${projectName}`);
  console.log(`🚀 Open the starter page: start src/index.html (Windows) OR open src/index.html (Mac/Linux)`);
} else if (args[0] === "install" && args[1]) {
  const packageName = args[1];
  const packageManager = detectPackageManager();
  console.log(`📦 Installing ${packageName} using ${packageManager}...`);
  
  try {
    execSync(`${packageManager} install ${packageName}`, { stdio: "inherit" });
    console.log(`✅ Package ${packageName} installed successfully!`);
  } catch (error) {
    console.error(`❌ Failed to install ${packageName}:`, error.message);
  }
} else {
  console.log("Usage:\n  zee create <project-name>\n  zee install <package-name>");
}

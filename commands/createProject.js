// Handles project creation
const fs = require("fs");
const path = require("path");
const projectStructure = require("../bin/struct");
const { createFiles } = require("../utils/fileOperations");

function createProject(projectName) {
  if (!projectName) {
    console.error("❌ Error: Please provide a project name.");
    console.log("Usage: zee create <project-name>");
    process.exit(1);
  }

  const projectPath = path.join(process.cwd(), projectName);

  if (fs.existsSync(projectPath)) {
    console.error("❌ Error: Project already exists!");
    process.exit(1);
  }

  fs.mkdirSync(projectPath, { recursive: true });
  createFiles(projectPath, projectStructure);

  console.log(`\n🎉 Project "${projectName}" created successfully!`);
  console.log(`📂 Navigate: cd ${projectName}`);
  console.log(`🚀 Start the project: open src/index.html (Mac/Linux) OR start src/index.html (Windows)`);
}

module.exports = { createProject };

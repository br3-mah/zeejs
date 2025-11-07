const fs = require("fs");
const path = require("path");

function installDb() {
  const projectPath = process.cwd();
  const databasePath = path.join(projectPath, "database");

  // Define subfolders
  const folders = ["migrations", "seeders", "models"];

  // Check if database folder already exists
  if (fs.existsSync(databasePath)) {
    console.error("❌ Error: Database folder already exists!");
    return;
  }

  // Create database folder and subfolders
  fs.mkdirSync(databasePath, { recursive: true });
  folders.forEach(folder => {
    fs.mkdirSync(path.join(databasePath, folder));
  });

  console.log("📂 Database structure created successfully!");
  console.log("✅ Created folders:");
  folders.forEach(folder => console.log(`  - database/${folder}`));
}

module.exports = { installDb };

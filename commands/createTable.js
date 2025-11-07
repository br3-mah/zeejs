const fs = require("fs");
const path = require("path");

function createTable(tableName, options) {
  if (!tableName) {
    console.error("❌ Error: Please provide a table name.");
    console.log("Usage: zee create table <table_name> [-m] [-s]");
    process.exit(1);
  }

  const projectPath = process.cwd();
  const databasePath = path.join(projectPath, "database");
  const migrationsPath = path.join(databasePath, "migrations");
  const modelsPath = path.join(databasePath, "models");
  const seedersPath = path.join(databasePath, "seeders");

  // Ensure migrations directory exists
  if (!fs.existsSync(migrationsPath)) {
    console.error("❌ Error: The database/migrations folder does not exist. Run `zee install-db` first.");
    process.exit(1);
  }

  // Generate timestamp for migration file
  const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, "");
  const migrationFile = path.join(migrationsPath, `${timestamp}_create_${tableName}.sql`);

  // SQL template for creating the table
  const sqlContent = `
  CREATE TABLE ${tableName} (
      id INT AUTO_INCREMENT PRIMARY KEY,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );
  `;

  fs.writeFileSync(migrationFile, sqlContent.trim());
  console.log(`✅ Migration file created: database/migrations/${timestamp}_create_${tableName}.sql`);

  // Create model file if -m option is passed
  if (options.includes("-m")) {
    if (!fs.existsSync(modelsPath)) fs.mkdirSync(modelsPath, { recursive: true });
    const modelFile = path.join(modelsPath, `${tableName}.js`);
    const modelContent = `
    class ${capitalize(tableName)} {
      constructor() {
        // Define model structure here
      }
    }

    module.exports = new ${capitalize(tableName)}();
    `;

    fs.writeFileSync(modelFile, modelContent.trim());
    console.log(`✅ Model file created: database/models/${tableName}.js`);
  }

  // Create seeder file if -s option is passed
  if (options.includes("-s")) {
    if (!fs.existsSync(seedersPath)) fs.mkdirSync(seedersPath, { recursive: true });
    const seederFile = path.join(seedersPath, `${tableName}Seeder.js`);
    const seederContent = `
    class ${capitalize(tableName)}Seeder {
      run() {
        console.log("Seeding data into ${tableName}...");
        // Add seeding logic here
      }
    }

    module.exports = new ${capitalize(tableName)}Seeder();
    `;

    fs.writeFileSync(seederFile, seederContent.trim());
    console.log(`✅ Seeder file created: database/seeders/${tableName}Seeder.js`);
  }
}

// Helper function to capitalize table name
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = { createTable };

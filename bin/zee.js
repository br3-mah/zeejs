#!/usr/bin/env node
// Main executable CLI script
const { createProject } = require("../commands/createProject");
const { installPackage } = require("../commands/installPackage");
const { installWeb } = require("../commands/installWeb");
const { parseZFile } = require("../commands/zparser");
const { installDb } = require("../commands/installDb");  // Import new command
const { createTable } = require("../commands/createTable");

// CLI argument handling
const args = process.argv.slice(2);
const command = args[0];
const param = args[1];

switch (command) {
  case "create":
    createProject(param);
    break;

  case "install":
    installPackage(param);
    break;

  case "install-web":
    installWeb();
    break;

  case "parse":
    parseZFile(param);
    break;

  case "install-db":  // Add install-db command
    installDb();
    break;

  default:
    console.log(`
    📌 Usage:

      --Get Started
      zee create <project-name>
      zee install <package-name>

      --Web
      zee install-web
      
      --Databases
      zee install-db
      zee create table <table_name> [-m]
      zee create table <table_name> [-s]
      zee create table <table_name> [-m] [-s]

      --Files
      zee parse <file.z>  # New: Parses .z files
    `);
}

const fs = require("fs");
const { parseString } = require("xml2js");
const path = require("path");

function parseZFile(filePath) {
  if (!filePath) {
    console.error("❌ Error: Please provide a .z file path.");
    console.log("Usage: zee parse <file.z>");
    process.exit(1);
  }

  const fullPath = path.resolve(process.cwd(), filePath);

  if (!fs.existsSync(fullPath)) {
    console.error("❌ Error: File not found:", filePath);
    process.exit(1);
  }

  const xmlData = fs.readFileSync(fullPath, "utf-8");

  parseString(xmlData, (err, result) => {
    if (err) {
      console.error("❌ Error parsing .z file:", err);
      return;
    }

    const ui = result["zee-ui"];
    const window = ui.window[0];

    console.log(`
    <div class="window" style="width:${window.$.width}px; height:${window.$.height}px;">
      <h1>${window.header[0].$.text}</h1>
      <button id="${window.button[0].$.id}">${window.button[0].$.text}</button>
    </div>
    `);
  });
}

module.exports = { parseZFile };

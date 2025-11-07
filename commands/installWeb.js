const { exec } = require("child_process");
const os = require("os");

function installWeb() {
  const platform = os.platform();

  console.log("🚀 Starting web environment installation...");

  if (platform === "win32") {
    installWindows();
  } else if (platform === "linux" || platform === "darwin") {
    installLinuxMac();
  } else {
    console.error("❌ Unsupported OS.");
  }
}

function installWindows() {
  console.log("🖥️ Detected Windows. Installing PHP, Composer, and MySQL...");

  exec(
    `winget install -e --id PHP.PHP && winget install -e --id Composer.Composer && winget install -e --id MySQL.MySQLServer`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ Installation failed: ${error.message}`);
        return;
      }
      console.log(stdout || stderr);
      console.log("✅ Installation complete.");
    }
  );
}

function installLinuxMac() {
  console.log("🐧 Detected Linux/macOS. Installing PHP, Composer, and MySQL...");

  exec(
    `sudo apt update && sudo apt install -y php php-cli php-mbstring unzip curl mysql-server composer`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ Installation failed: ${error.message}`);
        return;
      }
      console.log(stdout || stderr);
      console.log("✅ Installation complete.");
    }
  );
}

module.exports = { installWeb };

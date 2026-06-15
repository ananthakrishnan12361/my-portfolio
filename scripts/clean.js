const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const nextDir = path.join(root, ".next");

function sleep(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    /* wait */
  }
}

function clearReadOnlyFlags(dir) {
  if (process.platform !== "win32" || !fs.existsSync(dir)) return;

  try {
    const { execSync } = require("child_process");
    execSync(`attrib -R "${dir}\\*.*" /S /D`, { stdio: "ignore", cwd: root });
  } catch {
    /* best effort */
  }
}

function removeNextDir() {
  if (!fs.existsSync(nextDir)) {
    console.log("No .next folder to clean.");
    return;
  }

  const maxAttempts = 6;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      clearReadOnlyFlags(nextDir);
      fs.rmSync(nextDir, {
        recursive: true,
        force: true,
        maxRetries: 5,
        retryDelay: 400,
      });
      console.log("Removed .next cache.");
      return;
    } catch {
      if (attempt < maxAttempts) {
        sleep(800);
        continue;
      }

      const backup = `${nextDir}.old-${Date.now()}`;
      try {
        fs.renameSync(nextDir, backup);
        console.log(`Renamed locked .next to ${path.basename(backup)}`);
        return;
      } catch {
        console.error(
          "\nCould not clean .next — a process is still locking it.\n" +
            "1. Press Ctrl+C in every terminal running npm run dev\n" +
            "2. Run: taskkill /F /IM node.exe\n" +
            "3. Run: npm run dev:clean again\n"
        );
        process.exit(1);
      }
    }
  }
}

removeNextDir();

const { execSync } = require("child_process");

const myPid = process.pid;
const ports = [3000, 3001, 3002];

function sleep(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    /* wait */
  }
}

function killPid(pid) {
  if (!pid || Number(pid) === myPid) return;

  try {
    if (process.platform === "win32") {
      execSync(`taskkill /F /PID ${pid} 2>nul`, { stdio: "ignore" });
    } else {
      process.kill(Number(pid), "SIGTERM");
    }
  } catch {
    /* already stopped */
  }
}

function killPortListeners(port) {
  if (process.platform !== "win32") return;

  try {
    const out = execSync(`netstat -ano | findstr :${port}`, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    });

    for (const line of out.split("\n")) {
      if (!line.includes("LISTENING")) continue;
      const parts = line.trim().split(/\s+/);
      const pid = parts[parts.length - 1];
      killPid(pid);
    }
  } catch {
    /* port not in use */
  }
}

function killNextProcesses() {
  if (process.platform !== "win32") return;

  try {
    const out = execSync(
      'wmic process where "name=\'node.exe\'" get ProcessId,CommandLine /FORMAT:CSV',
      { encoding: "utf8", stdio: ["pipe", "pipe", "ignore"] }
    );

    for (const line of out.split("\n")) {
      if (!line.includes("node.exe")) continue;
      if (!/next|portfolio/i.test(line)) continue;

      const match = line.match(/,(\d+)\s*$/);
      if (match) killPid(match[1]);
    }
  } catch {
    /* wmic unavailable */
  }
}

for (const port of ports) killPortListeners(port);
killNextProcesses();
sleep(1500);

console.log("Stopped stale Next.js processes.");
